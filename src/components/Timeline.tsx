import React from 'react';
import Image from 'next/image';
import { formatDate } from '@/utils/misc';
import { useLocale } from 'next-intl';

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
  const locale = useLocale();
  const formattedStart = formatDate(start, locale, 'short');

  let formattedEnd = '';
  if (end !== 'Present') {
    formattedEnd = formatDate(end, locale, 'short');
  }

  return (
    <div className="relative flex flex-col items-start mx-6 md:mx-10 py-8">
      {/* Vertical Line */}
      <div className="absolute left-4 top-0 h-full border-l-4 border-okfg z-0"></div>

      {/* Timeline Marker */}
      <div className="absolute left-4 transform -translate-x-1/2 bg-okbg rounded-full p-1 md:p-2 shadow-md z-10">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Image
            className="object-cover rounded-full hover:scale-105 transition-transform duration-200"
            src={logo}
            alt={`${name} logo`}
            width={50}
            height={50}
          />
        </a>
      </div>

      {/* Timeline Content */}
      <div className="flex flex-col bg-okbg p-2 md:p-4 rounded-md shadow-md ml-16 w-[calc(100%-4rem)] z-0">
        {/* Date Range */}
        <div className="flex items-center text-xs sm:text-sm mb-2 md:mb-4">
          <span>{formattedStart}</span>
          <span className="mx-1 md:mx-2">–</span>
          <span>{formattedEnd}</span>
        </div>

        {/* Main Content */}
        <div className="space-y-1 md:space-y-2">
          <h2 className="font-bold text-xl sm:text-2xl">{name}</h2>
          <h3 className="text-base sm:text-lg text-oka font-medium">{title}</h3>
        </div>

        {/* Description List */}
        <ul className="list-disc list-inside text-xs sm:text-base space-y-2 mt-2 md:mt-4">
          {description.map((desc, id) => (
            <li key={id}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
