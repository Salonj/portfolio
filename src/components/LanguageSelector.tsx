'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { GlobeIcon } from './svgs';

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const availableLocales = [
    { code: 'en', name: 'English' },
    { code: 'fi', name: 'Suomi' },
    { code: 'sv', name: 'Svenska' },
  ];

  const changeLocale = (locale: string) => {
    setIsOpen(false);
    const newPathName = pathname.replace(/^\/[a-z]{2}/, `/${locale}`);
    router.push(newPathName);
  };

  return (
    <div className="relative inline-block">
      <button
        className="flex items-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <GlobeIcon className="w-10 h-10 text-white hover:text-highlight" />
      </button>

      {isOpen && (
        <div className="absolute snes-container bg-foreground right-0 top-12 text-background p-0">
          <ul className="flex flex-col">
            {availableLocales.map((locale) => (
              <li key={locale.code}>
                <button
                  className={`block w-full px-4 py-2 rounded-md text-left hover:bg-background hover:text-foreground`}
                  onClick={() => changeLocale(locale.code)}
                >
                  {locale.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
