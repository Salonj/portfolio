import ContactForm from '@/components/ContactForm';
import Container from '@/components/ui/Container';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('ContactPage');
  return (
    <Container className="flex flex-col gap-4 my-10 ">
      <h1 className="text-4xl md:text-5xl font-bold">{t('title')}</h1>
      <ContactForm />
    </Container>
  );
}
