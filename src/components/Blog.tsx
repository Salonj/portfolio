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
    <div className="mt-10 md:mt-20 bg-okbg3">
      <Container className="flex flex-col justify-between gap-6 my-20">
        <div className="flex items-baseline justify-between text-oktext">
          <h2 className="text-4xl sm:text-5xl font-bold">{t('title')}</h2>
          <Link
            href="/blog"
            className="flex items-center justify-center gap-2 hover:text-oka transition-transform transform hover:scale-105"
          >
            <p className="text-lg sm:text-2xl">{t('link')}</p>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-lg sm:text-2xl"
            />
          </Link>
        </div>
        <BlogGrid limit={LIMIT_POSTS} showBorders={false} />
      </Container>
    </div>
  );
}
