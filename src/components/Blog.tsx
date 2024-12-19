import Link from 'next/link';
import BlogGrid from './BlogGrid';
import { ArrowRightIcon } from './svgs';
import { useTranslations } from 'next-intl';

const LIMIT_POSTS = 2;

export default function Blog() {
  const t = useTranslations('HomePage.blog');
  return (
    <div className="flex flex-col mt-10">
      <div className="flex flex-row items-center justify-between mb-4">
        <h2 className="text-2xl">{t('title')}</h2>
        <Link
          href="/blog"
          className="flex items-center justify-center gap-2 hover:text-highlight"
        >
          <p className="text-sm">{t('link')}</p>
          <ArrowRightIcon className="w-6 h-6 md:h-8 md:w-8" />
        </Link>
      </div>
      <BlogGrid limit={LIMIT_POSTS} />
    </div>
  );
}
