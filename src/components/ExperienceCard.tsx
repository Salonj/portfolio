import { useTranslations } from 'next-intl';
import React, { use } from 'react';

interface CardProps {
  logo: string;
  name: string;
  link: string;
  title: string;
  start: string;
  end: string;
  description: string[];
}

const Card: React.FC<CardProps> = ({
  logo,
  name,
  link,
  title,
  start,
  end,
  description,
}) => {
  return (
    <div className="flex flex-col relative border-l-[4px] md:border-l-[6px] border-primary">
      {/* Timeline Marker */}
      <div className="absolute w-14 h-14 md:w-16 md:h-16 snes-image bg-foreground p-0 top-0 -left-7 md:-left-8">
        <a href={link} className="">
          <img className="object-fill" src={logo} alt={`${name} logo`} />
        </a>
      </div>

      {/* Timeline Content */}
      <div className="flex flex-col ml-12 text-primary mb-12">
        {/* Date Range */}
        <div className="text-xs text-muted flex">
          <span>{start}</span>
          <span> - </span>
          <span>{end}</span>
        </div>

        {/* Main Content */}
        <h2 className="font-semibold text-base md:text-lg">{name}</h2>
        <h3 className="text-sm md:text-base text-muted">{title}</h3>

        {/* Description List */}
        <ul className="list-disc list-inside text-xs sm:text-sm text-background">
          {description.map((desc, id) => (
            <li key={id}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
