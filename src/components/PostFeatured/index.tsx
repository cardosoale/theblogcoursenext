import { PostSummary } from '../PostSummary';
import { PostCoverImage } from '../PostCoverImage';
import { findAllPublicPosts } from '@/lib/post/queries';

export async function PostFeatured() {
  const posts = await findAllPublicPosts();
  const post = posts[0];
  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{
          href: '#',
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: post.coverImageUrl,
          alt: post.title,
          priority: true,
        }}
      />
      <PostSummary
        createdAt={post.createdAt}
        title={post.title}
        excerpt={post.excerpt}
        postLink={`/post/${post.slug}`}
        headingLevel='h1'
      />
    </section>
  );
}
