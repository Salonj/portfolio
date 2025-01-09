'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const availableLocales = [
  { code: 'fi', name: 'Suomi' },
  { code: 'en', name: 'English' },
  { code: 'sv', name: 'Svenska' },
];

export default function InlineLanguageSwitcher({
  onLocaleChange,
}: {
  onLocaleChange?: () => void;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = (locale: string) => {
    const newPathName = pathname.replace(/^\/[a-z]{2}/, `/${locale}`);
    router.push(newPathName);
    if (onLocaleChange) onLocaleChange();
  };

  return (
    <div className="flex justify-center text-base text-foreground">
      {availableLocales.map((locale, index) => (
        <button
          key={locale.code}
          onClick={() => changeLocale(locale.code)}
          className="transition-all"
        >
          <span className="hover:text-accent">{locale.name}</span>
          {index < availableLocales.length - 1 && (
            <span className="mx-2">|</span>
          )}
        </button>
      ))}
    </div>
  );
}
