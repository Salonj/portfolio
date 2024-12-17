'use client';
import { useState } from 'react';
import Link from 'next/link';
import LanguageSelector from './LanguageSelector';
import { BarsIcon, CloseIcon } from './svgs';
import { useTranslations } from 'next-intl';
import InlineLanguageSwitcher from './InlineLanguageSelector';

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
    <header className="relative md:sticky top-0 z-50 mt-6 sm:mt-8 md:mt-10">
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-8 py-4">
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

        <div className="hidden md:flex gap-6 items-center">
          <LanguageSelector />
        </div>

        <div className="md:hidden flex w-full justify-between items-center">
          <div className="text-lg font-bold">
            <Link href="/">onnisalomaa</Link>
          </div>
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <CloseIcon className="w-8 h-8" />
            ) : (
              <BarsIcon className="w-8 h-8" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`snes-container w-full px-4 py-0 bg-foreground text-background transition-all duration-500 overflow-hidden ${
          isMenuOpen
            ? 'top-full opacity-100 max-h-[90vh]'
            : 'top-full opacity-0 max-h-0'
        }`}
      >
        <ul className="flex flex-col items-left gap-6 mt-4 text-xl">
          {navLinks.map((nav, id) => (
            <li
              key={id}
              className="hover:bg-background hover:text-foreground rounded-md p-4 transition-all"
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
