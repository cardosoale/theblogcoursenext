import { hashPassword } from '@/lib/login/password-hashing';

(async () => {
  const password = '123456';
  const hashPasswordBase64 = await hashPassword(password);

  console.log(hashPasswordBase64);
})();
