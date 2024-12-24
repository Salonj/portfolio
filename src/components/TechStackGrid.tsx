import React from 'react';
import techData from '@/data/techStack.json';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Container from './ui/Container';

export default function TechStackGrid() {
  const t = useTranslations('HomePage.techStack');
  const { techStack } = techData;

  return (
    <div className="mt-10 md:mt-20 mb-20">
      <Container className="flex flex-col justify-between gap-4">
        <h2 className="text-5xl font-bold text-center">{t('title')}</h2>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-6">
          {Object.entries(techStack).map(([key, { name, icon }]) => (
            <div
              className="p-4 bg-background2 rounded-md shadow-md aspect-square"
              key={key}
            >
              <Image
                src={icon}
                alt={`${name} icon`}
                className="w-full object-contain rounded-md"
                width={32}
                height={32}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
