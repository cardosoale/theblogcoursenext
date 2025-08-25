import { hashPassword } from '@/lib/login/manage-login';

(async () => {
  const password = '';
  const hashPasswordBase64 = await hashPassword(password);

  console.log(hashPasswordBase64);
})();
