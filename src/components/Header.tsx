'use client';
import { useState } from 'react';
import Link from 'next/link';
import LanguageSelector from './LanguageSelector';
import { useTranslations } from 'next-intl';
import InlineLanguageSwitcher from './InlineLanguageSelector';
import ThemeDropdown from './ThemeSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

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
    <header className="sticky top-0 bg-background2 border-b-4 border-foreground w-full flex flex-col z-50">
      {/* Top Header Section */}
      <div className="max-w-3xl w-full flex justify-between py-4 px-2 items-center mx-auto">
        {/* Logo */}
        <div className="text-4xl flex items-center justify-center aspect-square font-bold border-foreground border-4 rounded-lg p-2">
          OS
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex gap-2 md:gap-4">
            {navLinks.map((nav, id) => (
              <li
                key={id}
                className="text-3xl font-bold hover:text-accent hover:underline"
              >
                <Link href={nav.href}>{t(nav.name)}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme and Language Selectors */}
        <div className="hidden md:flex gap-4 md:gap-6">
          <ThemeDropdown />
          <LanguageSelector />
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="p-2 text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FontAwesomeIcon icon={faXmark} className="text-3xl" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-background2 border-foreground overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <nav>
          <ul className="flex flex-col py-4 px-2">
            {navLinks.map((nav, id) => (
              <li
                key={id}
                className="text-2xl font-bold hover:bg-foreground hover:text-background2 py-2 rounded-md"
              >
                <Link
                  className="px-1"
                  href={nav.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(nav.name)}
                </Link>
              </li>
            ))}
            <div className="flex gap-4 md:gap-6 px-1 mt-2">
              <ThemeDropdown />
              <LanguageSelector />
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
