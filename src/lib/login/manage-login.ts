import { cookies } from 'next/headers';
import { SignJWT, jwtVerify } from 'jose';
import { redirect } from 'next/navigation';

const jwtsecretKey = process.env.JWT_SECRET_KEY;

const jwtEncodedKey = new TextEncoder().encode(jwtsecretKey);

const loginExpSeconds = Number(process.env.LOGIN_EXPIRATION_SECONDS) || 86400;
const loginExpStr = process.env.LOGIN_EXPIRATION_STRING || '1d';
const loginCookieName = process.env.LOGIN_COOKIE_NAME || 'loginSession';

type JwtPayload = {
  username: string;
  expireAt: Date;
};

export async function createLoginSession(username: string) {
  const expireAt = new Date(Date.now() + loginExpSeconds * 1000);
  const loginSession = await signJwt({ username, expireAt });
  const cookieStore = await cookies();

  cookieStore.set(loginCookieName, loginSession, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    expires: expireAt,
  });
}

export async function deleteLoginSession() {
  const cookieStore = await cookies();
  // cookieStore.set(loginCookieName, '', { expires: new Date(0) });
  cookieStore.delete(loginCookieName);
}

export async function getloginSession() {
  const cookieStore = await cookies();

  const jwt = cookieStore.get(loginCookieName)?.value;

  if (!jwt) return false;

  return verifyJwt(jwt);
}

export async function verifyLoginSession() {
  const jwtPayload = await getloginSession();

  if (!jwtPayload) return false;

  return jwtPayload.username === process.env.LOGIN_USER;
}

export async function requireLoginSessionOrRedirect() {
  const isAuthenticated = await verifyLoginSession();

  if (!isAuthenticated) {
    redirect('/admin/login');
  }
}

export async function signJwt(jwtPayload: JwtPayload) {
  return new SignJWT(jwtPayload)
    .setProtectedHeader({
      alg: 'HS256',
      typ: 'JWT',
    })
    .setIssuedAt()
    .setExpirationTime(loginExpStr)
    .sign(jwtEncodedKey);
}

export async function verifyJwt(
  jwt: string | undefined = '',
): Promise<JwtPayload | false> {
  try {
    const { payload } = await jwtVerify<JwtPayload>(jwt, jwtEncodedKey, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch {
    return false;
  }
}
