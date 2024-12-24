import Link from 'next/link';
import BlogGrid from './BlogGrid';
import { useTranslations } from 'next-intl';
import Container from './ui/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const LIMIT_POSTS = 2;

export default function Blog() {
  const t = useTranslations('HomePage.blog');
  return (
    <div className="mt-10 md:mt-20 bg-foreground">
      <Container className="flex flex-col justify-between gap-2 my-20">
        <div className="flex items-baseline justify-between text-background">
          <h2 className="text-5xl font-bold">{t('title')}</h2>
          <Link
            href="/projects"
            className="flex items-center justify-center gap-2 hover:text-accent"
          >
            <p className="text-2xl">{t('link')}</p>
            <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
          </Link>
        </div>
        <BlogGrid limit={LIMIT_POSTS} showBorders={false} />
      </Container>
    </div>
  );
}
