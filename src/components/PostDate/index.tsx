import { formatDatetime } from '@/utils/format-datetime';
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';

type PostDateProps = {
  dateTime: string;
};

export function PostDate({ dateTime }: PostDateProps) {
  return (
    <time
      className='text-slate-600 block text-sm/tight'
      dateTime={dateTime}
      title={formatDistanceToNow(dateTime)}
    >
      {formatDatetime(dateTime)}
    </time>
  );
}
