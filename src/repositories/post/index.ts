import { JsonPostRepository } from './json-post-repository';
import { PostRepository } from './post-repositories';

export const postRepository: PostRepository = new JsonPostRepository();
