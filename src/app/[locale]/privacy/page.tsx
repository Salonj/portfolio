import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

const lastUpdatedDate = '2024-12-19';

export default function Page() {
  const t = useTranslations('PrivacyPage');

  const locale = useLocale();

  const formattedDate = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
  }).format(new Date(lastUpdatedDate));

  return (
    <article className="prose mt-10 text-white">
      <div>
        <h1 className="text-4xl">{t('title')}</h1>
        <p>
          {t('lastUpdated')}: {formattedDate}
        </p>
      </div>
      <div>
        <h2 className="title text-3xl">{t('section1.title')}</h2>
        <p>{t('section1.content')}</p>
        <h2 className="">{t('section2.title')}</h2>
        <p>{t('section2.content')}</p>
        <h3>{t('section2.contactInfo')}</h3>
        <p>{t('section2.desc')}</p>
        <h2 className="">{t('section3.title')}</h2>
        <p>{t('section3.content')}</p>
        <ul>
          <li>{t('section3.listItem1')}</li>
          <li>{t('section3.listItem2')}</li>
          <li>{t('section3.listItem3')}</li>
        </ul>
        <h2 className="">{t('section4.title')}</h2>
        <p>{t('section4.content')}</p>
        <h2 className="">{t('section5.title')}</h2>
        <p>{t('section5.content')}</p>
        <h2 className="">{t('section6.title')}</h2>
        <p>{t('section6.content')}</p>
        <h2 className="">{t('section7.title')}</h2>
        <p>
          {t('section7.content')}{' '}
          <Link href="mailto:hello@onnisalomaa.dev">hello@onnisalomaa.dev</Link>{' '}
          {t('section7.contactForm')}{' '}
          <Link href="/contact">{t('section7.contactFormLink')}</Link>.
        </p>
      </div>
    </article>
  );
}
