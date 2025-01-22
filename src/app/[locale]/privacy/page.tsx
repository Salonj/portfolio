import Container from '@/components/ui/Container';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

const lastUpdatedDate = '2024-01-22';

export default function Page() {
  const t = useTranslations('PrivacyPage');

  const locale = useLocale();

  const formattedDate = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
  }).format(new Date(lastUpdatedDate));

  return (
    <Container>
      <article className=" my-10 text-foreground max-w-none">
        {/* Title Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
          <p className="text-base text-muted">
            {t('lastUpdated')}: {formattedDate}
          </p>
        </header>

        {/* Content Sections */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">{t('section1.title')}</h2>
          <p className="text-lg leading-relaxed">{t('section1.content')}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">{t('section2.title')}</h2>
          <p className="text-lg leading-relaxed mb-4">
            {t('section2.content')}
          </p>
          <h3 className="text-2xl font-semibold mb-2">
            {t('section2.contactInfo')}
          </h3>
          <p className="text-lg">{t('section2.desc')}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">{t('section3.title')}</h2>
          <p className="text-lg leading-relaxed mb-4">
            {t('section3.content')}
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>{t('section3.listItem1')}</li>
            <li>{t('section3.listItem2')}</li>
            <li>{t('section3.listItem3')}</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">{t('section4.title')}</h2>
          <p className="text-lg leading-relaxed">{t('section4.content')}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">{t('section5.title')}</h2>
          <p className="text-lg leading-relaxed">{t('section5.content')}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">{t('section6.title')}</h2>
          <p className="text-lg leading-relaxed">{t('section6.content')}</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">{t('section7.title')}</h2>
          <p className="text-lg leading-relaxed">
            {t('section7.content')}{' '}
            <Link
              href="mailto:hello@onnisalomaa.dev"
              className="text-accent hover:underline"
            >
              hello@onnisalomaa.dev
            </Link>{' '}
            {t('section7.contactForm')}{' '}
            <Link href="/contact" className="text-accent hover:underline">
              {t('section7.contactFormLink')}
            </Link>
            .
          </p>
        </section>
      </article>
    </Container>
  );
}
