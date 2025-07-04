import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostsList } from '@/components/PostsLists';
import { SpinLoader } from '@/components/SpinLoader';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <Link className='w-full h-full overflow-hidden rounded-xl' href='#'>
          <Image
            className='w-full h-full object-cover object-center group-hover:scale-105 transition'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Titulo do post'
            priority
          ></Image>
        </Link>
        <div className='flex flex-col gap-4 sm: justify-center'>
          <time
            className='text-slate-600 block text-sm/tight'
            dateTime='2025-04-20'
          >
            20/04/2025 10:00
          </time>

          <h1 className='text-2xl/tight font-extrabold sm:text-4xl'>
            <Link href='#'>Lorem ipsum dolor sit amet.</Link>
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In cum
            natus molestiae illum ullam incidunt nemo a! Minus quod, recusandae
            dolorem et porro quas, doloribus tenetur dolorum, ex inventore
            delectus.
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader className='min-h-screen' />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Footer</p>
      </footer>
    </Container>
  );
}
