'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from 'next-intl';

const themes = [
  {
    name: 'Default',
    className: '',
    background: '#0a1b3f',
    foreground: '#ffffff',
  },
  {
    name: 'Dark',
    className: 'dark',
    background: '#000000',
    foreground: '#e4e4e4',
  },
];

export default function ThemeDropdown() {
  const t = useTranslations('HomePage.navigation');
  const [currentTheme, setCurrentTheme] = useState('Default');

  // Handle theme change
  const handleThemeChange = () => {
    const newTheme = currentTheme === 'Default' ? 'Dark' : 'Default';
    const theme = themes.find((theme) => theme.name === newTheme);
    const rootElement = document.documentElement;

    // Remove all theme classes
    themes.forEach((theme) => {
      if (theme.className) rootElement.classList.remove(theme.className);
    });

    // Apply selected theme class
    if (theme?.className) {
      rootElement.classList.add(theme.className);
    }

    setCurrentTheme(newTheme);
  };

  return (
    <div className="relative inline-block">
      <button
        className="flex items-center hover:text-accent"
        onClick={handleThemeChange}
      >
        <FontAwesomeIcon icon={faCircleHalfStroke} className="text-3xl" />
      </button>
    </div>
  );
}
