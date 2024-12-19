import React from 'react';
import techData from '@/data/techStack.json';
import { useTranslations } from 'next-intl';

export default function TechStackGrid() {
  const t = useTranslations('HomePage.techStack');
  const { techStack } = techData;

  return (
    <div className="flex flex-col mt-10">
      <h2 className="text-2xl mb-4">{t('title')}</h2>
      <div className="snes-container grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-6 p-2 bg-foreground">
        {Object.entries(techStack).map(([key, { name, icon, color }]) => (
          <div
            className="flex flex-col items-center justify-center !m-0 gap-4"
            key={key}
          >
            <div
              className="snes-container flex flex-col w-14 h-14 md:w-16 md:h-16 items-center justify-center p-0"
              style={{ backgroundColor: color }}
            >
              <img
                src={icon}
                alt={`${name} icon`}
                className="w-full object-contain"
              />
            </div>
            <div className="text-primary text-xs">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
