import { DownloadIcon, ThumbtackIcon } from '@/components/svgs';
import { useTranslations } from 'next-intl';
import Socials from '@/components/Socials';

const ONNI_BIRTH_YEAR = 2003;

export default function About() {
  const t = useTranslations('HomePage');
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="flex flex-col w-full md:w-3/5 gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl">{t('title')} </h1>
          <div className="flex items-center">
            <ThumbtackIcon className="w-8 h-8" />
            <p className="text-sm">{t('location')}</p>
          </div>
        </div>
        <p className="text-xs">
          {new Date().getFullYear() - ONNI_BIRTH_YEAR}
          {t('about')}
        </p>
        <div className="flex items-center gap-8 mt-4">
          <button className="flex items-center snes-button text-background bg-foreground py-2 hover:border-highlight px-4 hover:text-highlight">
            <span className="text-md">Resume</span>
            <DownloadIcon className="w-10 h-10" />
          </button>
          <Socials />
        </div>
      </div>
      <div className="w-full md:w-2/5 items-center justify-center snes-container bg-foreground p-0">
        <img src="/mrBean.png" className="w-full rounded-md"></img>
      </div>
    </div>
  );
}
