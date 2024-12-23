'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const availableLocales = [
    { code: 'en', name: 'English' },
    { code: 'fi', name: 'Suomi' },
    { code: 'sv', name: 'Svenska' },
  ];

  const currentLocale = pathname.split('/')[1];
  const sortedLocales = availableLocales.sort((a, b) =>
    a.code === currentLocale ? -1 : b.code === currentLocale ? 1 : 0
  );

  const changeLocale = (locale: string) => {
    setIsOpen(false);
    const newPathName = pathname.replace(/^\/[a-z]{2}/, `/${locale}`);
    router.push(newPathName);
  };

  return (
    <div className="relative inline-block">
      <button
        className={`flex items-center ${
          isOpen ? 'text-accent' : 'hover:text-accent'
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FontAwesomeIcon icon={faGlobe} className="text-3xl" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-8 border-4 bg-background2 border-foreground rounded-lg">
          <ul className="flex flex-col">
            {sortedLocales.map((locale) => (
              <li key={locale.code}>
                <button
                  className={`block w-full px-4 py-2 text-center hover:bg-foreground hover:text-background2 text-lg ${
                    locale.code === currentLocale ? 'font-bold' : ''
                  }`}
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
