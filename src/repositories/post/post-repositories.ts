import { PostModel } from '@/models/post/post-model';

export interface PostRepository {
  findall(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
}
