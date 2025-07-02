import { SpinLoader } from '@/components/SpinLoader';

export default function HomePage() {
  return (
    <div>
      <SpinLoader className='min-h-[500px] bg-amber-500' />
    </div>
  );
}
