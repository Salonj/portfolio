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
    <div className="flex flex-col relative border-l-4 border-primary">
      {/* Timeline Marker */}
      <div className="absolute w-14 h-14 snes-image bg-foreground p-0 top-0 -left-6">
        <a href={link} className="">
          <img className="object-fit" src={logo} alt={`${name} logo`} />
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
        <h2 className="font-semibold text-md sm:text-lg">{name}</h2>
        <h3 className="text-sm sm:text-md text-primary">{title}</h3>

        {/* Description List */}
        <ul className="list-disc list-inside text-xs sm:text-sm">
          {description.map((desc, id) => (
            <li key={id}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
