import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/PostsLists';
import { SpinLoader } from '@/components/SpinLoader';
import { PostCoverImage } from '@/components/PostCoverImage';
import { Suspense } from 'react';
import { PostCard } from '@/components/PostCard';
import { postRepository } from '@/repositories/post';
import { PostFeatured } from '@/components/PostFeatured';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <PostFeatured />

      <Suspense fallback={<SpinLoader className='min-h-screen' />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Footer</p>
      </footer>
    </Container>
  );
}
