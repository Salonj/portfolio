import { DownloadIcon, ThumbtackIcon } from '@/components/svgs';
import { useTranslations } from 'next-intl';
import Socials from '@/components/Socials';
import Image from 'next/image';

const ONNI_BIRTH_YEAR = 2003;

export default function About() {
  const t = useTranslations('HomePage.about');
  return (
    <div className="w-full flex flex-col-reverse md:flex-row gap-8 md:gap-4">
      <div className="flex flex-col w-full md:w-5/7 gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl">{t('title')} </h1>
          <div className="flex items-center">
            <ThumbtackIcon className="w-6 h-6 md:h-8 md:w-8" />
            <p className="text-xs">{t('location')}</p>
          </div>
        </div>
        <p className="text-xs md:text-sm">
          {new Date().getFullYear() - ONNI_BIRTH_YEAR}
          {t('about')}
        </p>
        <div className="flex items-center gap-8 mt-4">
          <button className="snes-button flex items-center bg-foreground text-background p-0 gap-2 ">
            <span className="text-sm">{t('cvLink')}</span>
            <DownloadIcon className="w-8 h-8 md:h-10 md:w-10" />
          </button>
          <Socials />
        </div>
      </div>
      <div className="w-1/2 md:w-2/7 flex justify-start md:justify-center items-center">
        <div className="snes-container bg-foreground p-0">
          <Image
            src="/mrBean.png"
            className="w-full rounded-md md:max-w-full"
            alt="mrBean"
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  );
}
