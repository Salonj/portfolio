import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Container from './ui/Container';

export default function Hero() {
  const t = useTranslations('HomePage.about');
  return (
    <div className="mt-12 md:mt-24">
      <Container className="flex flex-col items-center">
        <Image
          src="/mrBean.png"
          alt="Onni Salomaa"
          width={400}
          height={400}
          className="rounded-full border-8 border-foreground"
        />
        <div className="mt-10">
          <p className="text-center text-3xl md:text-4xl font-bold">
            Hey, I’m <b className="text-accent">Onni Salomaa.</b> Here you can
            check out what I’m working on. I try and learn to become better on
            what I do.
          </p>
        </div>
      </Container>
    </div>
  );
}
