import { findPostBySlugCached } from '@/lib/post/queries/public';

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);

  return (
    <div>
      <p>{post.content}</p>
    </div>
  );
}
