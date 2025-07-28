import { postRepository } from '@/repositories/post';
import { cache } from 'react';

export const findPostById = cache(
  async (id: string) => await postRepository.findById(id),
);

export const findAllPostAdmin = cache(
  async () => await postRepository.findAll(),
);
