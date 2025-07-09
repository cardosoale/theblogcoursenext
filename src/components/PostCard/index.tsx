import { PostModel } from '@/models/post/post-model';
import { PostHeading } from '../PostHeading';

type PostCardProps = {
  post: PostModel;
  headingLevel?: 'h1' | 'h2';
};

export function PostCard({ post, headingLevel = 'h2' }: PostCardProps) {
  return (
    <div className='flex flex-col gap-4 sm: justify-center'>
      <time
        className='text-slate-600 block text-sm/tight'
        dateTime={post.createdAt}
      >
        {post.createdAt}
      </time>

      <PostHeading url={`/post/${post.slug}`} as={headingLevel}>
        {post.title}
      </PostHeading>

      <p>{post.excerpt}</p>
    </div>
  );
}
