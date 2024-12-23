import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Socials() {
  return (
    <div className="flex gap-4 md:gap-6">
      <a className="hover:cursor-pointer ">
        <FontAwesomeIcon
          icon={faGithub}
          className="text-2xl md:text-3xl text-foreground hover:text-accent"
        />
      </a>
      <a className="hover:cursor-pointer">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-2xl md:text-3xl text-foreground hover:text-accent"
        />
      </a>
      <a className="hover:cursor-pointer">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="text-2xl md:text-3xl text-foreground hover:text-accent"
        />
      </a>
    </div>
  );
}
