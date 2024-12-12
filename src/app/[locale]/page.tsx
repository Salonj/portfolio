import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import Globe from '@/assets/icons/Globe.svg'
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link className='text-2xl' href="/about">{t('about')}</Link>
    </div>
  );
}