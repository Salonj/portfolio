import { DownloadIcon, ThumbtackIcon } from '@/components/svgs';
import { useTranslations } from 'next-intl';
import Socials from '@/components/Socials';
import Image from 'next/image';
import Container from './ui/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

const ONNI_BIRTH_YEAR = 2003;

export default function About() {
  const t = useTranslations('HomePage.about');

  const age = new Date().getFullYear() - ONNI_BIRTH_YEAR;
  return (
    <div className="mt-10 md:mt-20 bg-foreground">
      <Container className="flex items-stretch justify-between gap-2 my-20">
        {/* Image Section */}
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src="/mrBean.png"
            alt="Onni Salomaa"
            width={400}
            height={400}
            className="rounded-md"
          />
        </div>

        {/* Content Section */}
        <div className="w-1/2 flex flex-col justify-between text-background2">
          <div>
            <h2 className="text-5xl font-bold">About me</h2>
            <p className="text-2xl">
              {age}-year-old software engineering major student. I learn, design
              and implement websites and applications.
            </p>
          </div>
          <Socials
            textColor="text-background2"
            textSize="text-3xl md:text-4xl"
          />
          <button className="w-full border-4 rounded-md p-4 flex gap-2 items-center justify-center text-3xl font-bold">
            Resume
            <FontAwesomeIcon icon={faFileArrowDown} className="text-3xl" />
          </button>
        </div>
      </Container>
    </div>
  );
}
