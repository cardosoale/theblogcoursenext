import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';
import { findAllPublicPosts } from '@/lib/post/queries';

export async function PostsList() {
  const posts = await findAllPublicPosts();

  return (
    <div className='grid grid-cols-1 gap-8  sm:grid-cols-2 lg:grid-cols-3'>
      {posts.slice(1).map(post => {
        return (
          <div className='flex flex-col group gap-4' key={post.id}>
            <PostCoverImage
              linkProps={{
                href: `/post/${post.slug}`,
              }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
                priority: false,
              }}
            />
            <PostSummary
              createdAt={post.createdAt}
              title={post.title}
              excerpt={post.excerpt}
              postLink={`/post/${post.slug}`}
            />
          </div>
        );
      })}
    </div>
  );
}
