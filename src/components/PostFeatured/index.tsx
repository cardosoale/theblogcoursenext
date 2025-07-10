import { postRepository } from '@/repositories/post';
import { PostSummary } from '../PostSummary';
import { PostCoverImage } from '../PostCoverImage';

export async function PostFeatured() {
  const posts = await postRepository.findall();
  const featuredPost = posts[0];
  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{
          href: '#',
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: featuredPost.coverImageUrl,
          alt: featuredPost.title,
          priority: true,
        }}
      />
      <PostSummary
        createdAt={featuredPost.createdAt}
        title={featuredPost.title}
        excerpt={featuredPost.excerpt}
        postLink={`/post/${featuredPost.slug}`}
        headingLevel='h1'
      />
    </section>
  );
}
