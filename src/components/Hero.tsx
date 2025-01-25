import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Container from './ui/Container';

export default function Hero() {
  const t = useTranslations('HomePage.about');
  return (
    <div className="mt-10 md:mt-20">
      <Container className="flex flex-col items-center gap-2 my-20">
        <Image
          src="/hero.png"
          alt="Onni Salomaa"
          width={400}
          height={400}
          className="rounded-full  border-8 border-okfg"
          priority={true}
        />
        <div className="mt-10">
          <p className="text-center text-3xl sm:text-4xl font-bold">
            {t('introStart')}
            <b className="text-oka">Onni Salomaa.</b> {t('introEnd')}
          </p>
        </div>
      </Container>
    </div>
  );
}
