'use client';
import { useTranslations } from 'next-intl';
import Socials from '@/components/Socials';
import Image from 'next/image';
import Container from './ui/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

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
    <div className="mt-10 md:mt-20 bg-okbg3">
      <Container className="flex flex-col md:flex-row md:items-stretch justify-between gap-6 my-20">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center md:justify-center">
          <Image
            src="/about.png"
            alt="Onni Salomaa"
            width={400}
            height={400}
            className="rounded-md"
          />
        </div>

        {/* Content Section */}
        <div className="w-full  md:w-1/2 flex flex-col justify-between text-oktext">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              {t('about')}
            </h2>
            <p className="text-xl sm:text-2xl mb-2">
              {age}
              {t('info')}
            </p>
          </div>
          <Socials
            textColor="text-oktext"
            textSize="text-3xl sm:text-4xl mb-8"
          />
          <Link href="/resume.pdf" target="_blank">
            <button className="w-full border-4 border-oktext rounded-md p-4 flex gap-2 items-center justify-center text-2xl sm:text-3xl font-bold hover:bg-oktext hover:text-okfg transition-transform transform hover:scale-105">
              {t('resume')}
              <FontAwesomeIcon icon={faFileArrowDown} className="" />
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
