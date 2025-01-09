import Link from 'next/link';
import ProjectGrid from './ProjectGrid';
import { useTranslations } from 'next-intl';
import Container from './ui/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const LIMIT_PROJECTS = 2;

export default function Projects() {
  const t = useTranslations('HomePage.projects');
  return (
    <div className="mt-10 md:mt-20">
      <Container className="flex flex-col justify-between gap-6 my-20">
        <div className="flex items-baseline justify-between">
          <h2 className="text-5xl font-bold">{t('title')}</h2>
          <Link
            href="/projects"
            className="flex items-center justify-center gap-2 hover:text-oka"
          >
            <p className="text-2xl">{t('link')}</p>
            <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
          </Link>
        </div>
        <ProjectGrid LIMIT_PROJECTS={LIMIT_PROJECTS} />
      </Container>
    </div>
  );
}
