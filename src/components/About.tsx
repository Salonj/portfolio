import { DownloadIcon, ThumbtackIcon } from '@/components/svgs';
import { useTranslations } from 'next-intl';
import Socials from '@/components/Socials';
import Image from 'next/image';

const ONNI_BIRTH_YEAR = 2003;

export default function About() {
  const t = useTranslations('HomePage.about');
  return (
    <div className="flex flex-col mt-12 md:mt-24 items-center">
      <Image
        src="/mrBean.png"
        alt="Onni Salomaa"
        width={300}
        height={300}
        className="rounded-full border-4 border-foreground"
      />
      <div className="mt-10">
        <p className="text-center text-3xl md:text-4xl font-bold">
          Hey, I’m <b className="text-accent">Onni Salomaa.</b> Here you can
          check out what I’m working on. I try and learn to become better on
          what I do.
        </p>
      </div>
    </div>
  );
}
