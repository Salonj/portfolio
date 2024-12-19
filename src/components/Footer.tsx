import Link from 'next/link';
import Socials from './Socials';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('HomePage.footer');
  return (
    <footer className="flex flex-col mt-10 mb-6 md:mb-10 px-8 md:px-0">
      <hr className="w-full border-t border-white mb-10" />
      <div className="flex items-center justify-between">
        <div className="flex">
          <p className="text-center text-xs">
            <span>&copy; {new Date().getFullYear()}</span>{' '}
            <Link className="hover:text-highlight" href="/">
              onnisalomaa.dev
            </Link>
            {' | '}
            <Link className="font-bold hover:text-highlight" href="/privacy">
              {t('privacy')}?
            </Link>
          </p>
        </div>
        <Socials />
      </div>
    </footer>
  );
}
