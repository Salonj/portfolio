'use client';

import { useState } from 'react';
import { CogIcon } from './svgs';
import { useTranslations } from 'next-intl';

const themes = [
  {
    name: 'Default',
    className: '',
    background: '#0a1b3f',
    foreground: '#ffffff',
  },
  {
    name: 'Green',
    className: 'green',
    background: '#0a3f1b',
    foreground: '#ffffff',
  },
  {
    name: 'Dark',
    className: 'dark',
    background: '#000000',
    foreground: '#e4e4e4',
  },
  {
    name: 'Pastel',
    className: 'pastel',
    background: '#f5f7fa',
    foreground: '#333333',
  },
];

export default function ThemeDropdown() {
  const t = useTranslations('HomePage.navigation');
  const [currentTheme, setCurrentTheme] = useState('Default');
  const [isOpen, setIsOpen] = useState(false);

  // Handle theme change
  const handleThemeChange = (themeName: string, className: string) => {
    const rootElement = document.documentElement;

    // Remove all theme classes
    themes.forEach((theme) => {
      if (theme.className) rootElement.classList.remove(theme.className);
    });

    // Apply selected theme class
    if (className) {
      rootElement.classList.add(className);
    }

    setCurrentTheme(themeName);
  };

  return (
    <div className="relative inline-block">
      <button
        className="flex items-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <CogIcon className="w-10 h-10 text-white hover:text-highlight" />
      </button>

      {isOpen && (
        <div className="absolute snes-container bg-foreground right-0 top-12 text-background p-4 w-64">
          <div className="text-sm !mb-2">{t('theme')}</div>
          <ul className="flex flex-col">
            {themes.map((theme) => (
              <li
                key={theme.name}
                onClick={() => handleThemeChange(theme.name, theme.className)}
                className={`text-sm flex items-center px-4 py-2 hover:bg-background rounded-md hover:text-foreground cursor-pointer ${
                  currentTheme === theme.name
                    ? 'bg-background text-foreground'
                    : ''
                }`}
              >
                <div
                  className="w-8 h-8 md:h-10 md:w-10 rounded-md border border-gray-300 mr-2"
                  style={{
                    background: theme.background,
                    borderColor: theme.foreground,
                  }}
                />
                {theme.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
