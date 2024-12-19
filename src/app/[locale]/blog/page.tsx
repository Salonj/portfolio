import BlogGrid from '@/components/BlogGrid';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('BlogPage');
  return (
    <div className="flex flex-col gap-4 mt-10 px-8">
      <h1 className="text-2xl">{t('title')}</h1>
      <BlogGrid />
    </div>
  );
}
