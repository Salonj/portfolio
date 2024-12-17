import Link from 'next/link';
import Socials from './Socials';

export default function Footer() {
  return (
    <footer className="flex items-center justify-between mb-6 sm:mb-8 md:mb-10">
      <div className="flex">
        <p className="text-center text-xs">
          <span>&copy; {new Date().getFullYear()}</span>{' '}
          <Link className="hover:text-highlight" href="/">
            onnisalomaa.dev
          </Link>
          {' | '}
          <Link className="font-bold hover:text-highlight" href="/privacy">
            privacy?
          </Link>
        </p>
      </div>
      <Socials />
    </footer>
  );
}
