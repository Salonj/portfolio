import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export function NotFoundPage() {
  const t = useTranslations('NotFoundPage');
  return (
    <div className="flex flex-col items-center justify-center gap-4 my-10">
      <h1 className="text-5xl font-bold">404</h1>
      <Image
        className="rounded-md shadow-md"
        src="https://i.giphy.com/4KLv24CPUoZ0I.webp"
        alt="Mr. Bean"
        width={500}
        height={500}
      />

      <p className="text-3xl">{t('message')}</p>
      <Link href="/" className="bg-foreground px-4 py-2 rounded-md">
        <p className="text-xl font-bold text-background2">{t('back')}</p>
      </Link>
    </div>
  );
}
