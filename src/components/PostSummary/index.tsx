import { PostHeading } from '../PostHeading';
import { formatDatetime, formatRelativeDate } from '@/utils/format-datetime';

type PostSummaryProps = {
  createdAt: string;
  title: string;
  excerpt: string;
  postHeading?: 'h1' | 'h2';
  postLink: string;
};

export function PostSummary({
  postLink,
  postHeading: headingLevel = 'h2',
  createdAt,
  title,
  excerpt,
}: PostSummaryProps) {
  return (
    <div className='flex flex-col gap-4 sm: justify-center'>
      <time
        className='text-slate-600 block text-sm/tight'
        dateTime={formatDatetime(createdAt)}
        title={formatRelativeDate(createdAt)}
      >
        {formatDatetime(createdAt)}
      </time>

      <PostHeading url={postLink} as={headingLevel}>
        {title}
      </PostHeading>

      <p>{excerpt}</p>
    </div>
  );
}
