import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

type PostImageCoverProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};

export function PostCoverImage({ imageProps, linkProps }: PostImageCoverProps) {
  return (
    <Link
      {...linkProps}
      className={clsx(
        'w-full',
        'h-full',
        'overflow-hidden',
        'rounded-xl',
        linkProps.className,
      )}
      href='#'
    >
      <Image
        {...imageProps}
        className={clsx(
          'w-full',
          'h-full',
          'object-cover',
          'object-center',
          'group-hover:scale-105',
          'transition',
          imageProps.className,
        )}
        alt={imageProps.alt}
      ></Image>
    </Link>
  );
}
