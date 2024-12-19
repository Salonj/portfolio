import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function NotFoundPage() {
  const t = useTranslations('NotFoundPage');
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-6xl font-bold">404</h1>
      <div className="snes-container p-4 bg-foreground">
        <img
          className="w-full rounded-md"
          src="https://i.giphy.com/4KLv24CPUoZ0I.webp"
        ></img>
      </div>

      <p className="text-lg text-center">{t('message')}</p>
      <Link
        href="/"
        className="snes-button bg-foreground text-background w-1/2 md:w-1/3 text-center"
      >
        <p className="text-lg">{t('back')}</p>
      </Link>
    </div>
  );
}
