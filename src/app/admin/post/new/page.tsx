import { ManagePostForm } from '@/components/admin/ManagePostForm';

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <div className='flex flex-col gap-6'>
      <h1 className=' text-xl font-bold'>Criar Post</h1>
      <ManagePostForm />
    </div>
  );
}
