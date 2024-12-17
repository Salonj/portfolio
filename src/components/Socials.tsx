import { EnvelopeIcon, GithubIcon, LinkedinIcon } from './svgs';

export default function Socials() {
  return (
    <div className="flex gap-6">
      <a className="hover:cursor-pointer ">
        <GithubIcon
          href="www.youtube.com"
          target="_blank"
          className="w-10 h-10 text-foreground hover:text-highlight"
        />
      </a>
      <a className="hover:cursor-pointer">
        <LinkedinIcon
          href="www.youtube.com"
          target="_blank"
          className="w-10 h-10 text-foreground hover:text-highlight"
        />
      </a>
      <a className="hover:cursor-pointer">
        <EnvelopeIcon
          href="mailto:me@onnisalomaa.dev"
          target="_blank"
          className="w-10 h-10 text-foreground hover:text-highlight"
        />
      </a>
    </div>
  );
}
