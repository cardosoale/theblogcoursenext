import { PostModel } from '@/models/post/post-model';

export interface PostRepository {
  findallPublic(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
  findBySlug(slug: string): Promise<PostModel>;
}
