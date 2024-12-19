import ProjectGrid from '@/components/ProjectGrid';
import { useTranslations } from 'next-intl';

const LIMIT_PROJECTS = 6;

export default function Page() {
  const t = useTranslations('ProjectsPage');
  return (
    <div className="flex flex-col gap-4 mt-10 px-8">
      <h1 className="text-2xl">{t('title')}</h1>
      <ProjectGrid LIMIT_PROJECTS={LIMIT_PROJECTS} />
    </div>
  );
}
