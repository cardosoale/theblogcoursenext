'use server';

import { asyncDelay } from '@/utils/async-delay';

type LoginActionState = {
  username: string;
  error: string;
};

export async function loginAction(state: LoginActionState, formData: FormData) {
  await asyncDelay(5000);

  if (!(formData instanceof FormData)) {
    return {
      username: '',
      error: 'Dados Inválidos',
    };
  }

  // Dados que o usuário digitou mo form
  // const username = formData.get('username')?.toString() || ''
  // const password = formData.get('password')?.toString() || ''

  // checaria na BD num sistema real
  // const isUsernameValid = username === process.env.LOGIN_USER
  // const isPasswordValid = ''

  return {
    username: '',
    error: '',
  };
}
