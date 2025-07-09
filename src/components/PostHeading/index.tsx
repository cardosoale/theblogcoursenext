import clsx from 'clsx';
import Link from 'next/link';

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
};

export function PostHeading({
  children,
  url,
  as: Tag = 'h2',
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: 'sm:text-4xl font-extrabold',
    h2: 'font-bold',
  };

  const commonClasses = 'text-2xl/tight';

  return (
    <Tag className={clsx(headingClassesMap[Tag], commonClasses)}>
      <Link className='group-hover:text-slate-600 transition' href={url}>
        {children}
      </Link>
    </Tag>
  );
}
