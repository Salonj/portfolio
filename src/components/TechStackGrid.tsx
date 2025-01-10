import React from 'react';
import techData from '@/data/techStack.json';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Container from './ui/Container';

export default function TechStackGrid() {
  const t = useTranslations('HomePage.techStack');
  const { techStack } = techData;

  return (
    <div className="mt-10 md:mt-20">
      <Container className="flex flex-col justify-between gap-6 my-20">
        <h2 className="text-4xl md:text-5xl font-bold md:text-center">
          {t('title')}
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-6">
          {Object.entries(techStack).map(([key, { name, icon, color }]) => (
            <div
              key={key}
              className="relative p-4 bg-okbg rounded-md shadow-md aspect-square transform transition-transform duration-300 hover:scale-110 group"
            >
              <Image
                src={icon}
                alt={`${name} icon`}
                className="w-full h-full object-contain rounded-md"
                width={32}
                height={32}
              />
              <div
                style={{ backgroundColor: color }}
                className="absolute inset-0 flex items-center justify-center rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <p className="text-white text-lg font-bold">{name}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
