import ProjectGrid from '@/components/ProjectGrid';
import Container from '@/components/ui/Container';
import { useTranslations } from 'next-intl';

const LIMIT_PROJECTS = 6;

export default function Page() {
  const t = useTranslations('ProjectsPage');
  return (
    <Container className="flex flex-col gap-4 my-10">
      <h1 className="text-4xl sm:text-5xl font-bold">{t('title')}</h1>
      <ProjectGrid LIMIT_PROJECTS={LIMIT_PROJECTS} />
    </Container>
  );
}
