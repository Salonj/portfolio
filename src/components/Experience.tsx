'use client';

import { useState } from 'react';
import workExperience from '@/data/workExperience.json';
import educationData from '@/data/educationData.json';
import { useTranslations } from 'next-intl';
import Card from './Timeline';
import Container from './ui/Container';

export default function Experience() {
  const [isCareerTab, setIsCareerTab] = useState(true);
  const t = useTranslations('HomePage.experience');
  const tWork = useTranslations('work');
  const tEdu = useTranslations('education');

  const switchTab = () => {
    setIsCareerTab((prev) => !prev);
  };

  return (
    <div className="mt-10 md:mt-20 bg-foreground">
      <Container className="flex flex-col justify-between gap-2 my-20">
        <div className="text-2xl font-bold flex bg-background p-2 rounded-md">
          <button
            className={`w-1/2 p-2 rounded-md ${
              isCareerTab
                ? 'bg-foreground text-background'
                : 'bg-background text-foreground'
            }`}
            onClick={switchTab}
          >
            {t('work')}
          </button>
          <button
            className={`w-1/2 p-2 rounded-md ${
              isCareerTab
                ? 'bg-background text-foreground'
                : 'bg-foreground text-background'
            }`}
            onClick={switchTab}
          >
            {t('education')}
          </button>
        </div>

        {/* Timeline */}
        <div className="bg-background rounded-md">
          {isCareerTab ? (
            <div>
              {workExperience.workExperience.map((job, id) => (
                <Card
                  key={id}
                  logo={job.logo}
                  name={job.nameKey}
                  link={job.href}
                  title={tWork(job.titleKey)}
                  start={tWork(job.startKey)}
                  end={tWork(job.endKey)}
                  description={job.descriptionKey.map((key) => tWork(key))}
                />
              ))}
            </div>
          ) : (
            <div>
              {educationData.educationData.map((edu, id) => (
                <Card
                  key={id}
                  logo={edu.logo}
                  name={tEdu(edu.nameKey)}
                  link={edu.href}
                  title={tEdu(edu.titleKey)}
                  start={tEdu(edu.startKey)}
                  end={tEdu(edu.endKey)}
                  description={edu.descriptionKey.map((key) => tEdu(key))}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
