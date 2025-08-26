import { hashPassword } from '@/lib/login/manage-login';

(async () => {
  const password = '123456';
  const hashPasswordBase64 = await hashPassword(password);

  console.log(hashPasswordBase64);
})();
