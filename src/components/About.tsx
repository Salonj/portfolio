import { useTranslations } from 'next-intl';
import Socials from '@/components/Socials';
import Image from 'next/image';
import Container from './ui/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

const ONNI_BIRTH_DATE = '2003-10-04';

export default function About() {
  const t = useTranslations('HomePage.about');

  const calculateAge = (birthDate: string): number => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();

    // Adjust age if the birth date hasn't occurred yet this year
    const hasHadBirthdayThisYear =
      today.getMonth() > birth.getMonth() ||
      (today.getMonth() === birth.getMonth() &&
        today.getDate() >= birth.getDate());
    if (!hasHadBirthdayThisYear) {
      age--;
    }

    return age;
  };

  const age = calculateAge(ONNI_BIRTH_DATE);

  return (
    <div className="mt-10 md:mt-20 bg-foreground">
      <Container className="flex flex-col items-center md:flex-row  md:items-stretch justify-between gap-2 my-20">
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
            <h2 className="text-5xl font-bold mb-4">{t('about')}</h2>
            <p className="text-2xl mb-2">
              {age}
              {t('info')}
            </p>
          </div>
          <Socials
            textColor="text-background2"
            textSize="text-3xl md:text-4xl mb-8"
          />
          <button className="w-full border-4 rounded-md p-4 flex gap-2 items-center justify-center text-3xl font-bold hover:border-accent hover:text-accent">
            {t('resume')}
            <FontAwesomeIcon icon={faFileArrowDown} className="text-3xl" />
          </button>
        </div>
      </Container>
    </div>
  );
}
