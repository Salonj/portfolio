import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

type SocialsProps = {
  textColor?: string;
  textSize?: string;
};

export default function Socials({
  textColor = 'text-foreground',
  textSize = 'text-2xl sm:text-3xl',
}: SocialsProps) {
  return (
    <div className="flex gap-4 md:gap-6">
      <Link
        href="https://github.com/Salonj"
        target="_blank"
        className="hover:cursor-pointer"
        aria-label="GitHub"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className={`${textSize} hover:text-[#6e5494] ${textColor}`}
        />
      </Link>
      <Link
        href="https://linkedin.com/in/onnisalomaa"
        target="_blank"
        className="hover:cursor-pointer"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className={`${textSize} hover:text-[#0077b5] ${textColor}`}
        />
      </Link>
      <Link href="/contact" className="hover:cursor-pointer" aria-label="Email">
        <FontAwesomeIcon
          icon={faEnvelope}
          className={`${textSize} hover:text-[#d14836] ${textColor}`}
        />
      </Link>
    </div>
  );
}
