'use server';

import { signIn } from '../auth';

export async function loginWithGH() {
  await signIn('github');
}
