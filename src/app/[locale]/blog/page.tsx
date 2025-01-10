import BlogGrid from '@/components/BlogGrid';
import Container from '@/components/ui/Container';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('BlogPage');
  return (
    <Container className="flex flex-col gap-4 my-10 ">
      <h1 className="text-4xl md:text-5xl font-bold">{t('title')}</h1>
      <BlogGrid />
    </Container>
  );
}
