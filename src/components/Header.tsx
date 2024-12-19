'use client';
import { useState } from 'react';
import Link from 'next/link';
import LanguageSelector from './LanguageSelector';
import { BarsIcon, CloseIcon } from './svgs';
import { useTranslations } from 'next-intl';
import InlineLanguageSwitcher from './InlineLanguageSelector';
import ThemeDropdown from './ThemeSelector';

const navLinks = [
  { name: 'home', href: '/' },
  { name: 'projects', href: '/projects' },
  { name: 'blog', href: '/blog' },
  { name: 'contact', href: '/contact' },
];

export default function Header() {
  const t = useTranslations('HomePage.navigation');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="relative md:sticky bg-background top-0 z-50 mt-6 sm:mt-8 md:mt-10 rounded-b-md px-8 md:px-0">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <ul className="hidden md:flex gap-6">
          {navLinks.map((nav, id) => (
            <li
              key={id}
              className="text-sm hover:text-highlight transition-all"
            >
              <Link href={nav.href}>{t(nav.name)}</Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex gap-4 items-center">
          <ThemeDropdown />
          <LanguageSelector />
        </div>

        <div className="md:hidden flex w-full justify-between items-center">
          <div className="text-lg font-bold">
            <Link href="/">&lt;logo&gt;</Link>
          </div>
          <div className="flex flex-row gap-4">
            <ThemeDropdown />
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? (
                <CloseIcon className="w-10 h-10" />
              ) : (
                <BarsIcon className="w-10 h-10" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`md:hidden absolute snes-container right-8 left-8 bg-foreground text-background p-0 py-2 transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? ' opacity-100 max-h-[90vh]'
            : 'opacity-0 max-h-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-start gap-6 mt-4 text-xl">
          {navLinks.map((nav, id) => (
            <li
              key={id}
              className="w-full rounded-md p-4 hover:bg-background hover:text-foreground"
            >
              <Link href={nav.href} onClick={() => setIsMenuOpen(false)}>
                {t(nav.name)}
              </Link>
            </li>
          ))}
        </ul>
        <InlineLanguageSwitcher />
      </div>
    </header>
  );
}
