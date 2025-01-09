import Link from 'next/link';
import Socials from './Socials';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('HomePage.footer');
  return (
    <footer className="bg-okbg border-t-4 border-okfg w-full flex flex-col">
      <div className="max-w-3xl w-full flex justify-between py-4 px-2 items-center mx-auto gap-2">
        <div className="flex ">
          <p className="text-sm">
            <span>&copy; {new Date().getFullYear()}</span>{' '}
            <Link className="" href="/">
              onnisalomaa.dev
            </Link>
            {' | '}
            <Link className="font-bold hover:text-oka" href="/privacy">
              {t('privacy')}?
            </Link>
          </p>
        </div>
        <Socials />
      </div>
    </footer>
  );
}
