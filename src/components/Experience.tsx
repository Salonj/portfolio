'use client';

import { useState } from 'react';
import workExperience from '@/data/workExperience.json';
import educationData from '@/data/educationData.json';
import { useTranslations } from 'next-intl';
import Card from './ExperienceCard';

export default function Experience() {
  const [isCareerTab, setIsCareerTab] = useState(true);
  const t = useTranslations('HomePage.experience');
  const tWork = useTranslations('work');
  const tEdu = useTranslations('education');

  const switchTab = () => {
    setIsCareerTab((prev) => !prev);
  };

  return (
    <div className="flex flex-col mt-10">
      {/* Tab Navigation */}
      <div className="snes-container text-sm flex bg-foreground p-0">
        <button
          className={`w-1/2 p-2 !m-0 ${
            isCareerTab
              ? 'bg-background text-foreground'
              : 'bg-foreground text-background'
          }`}
          onClick={switchTab}
        >
          {t('work')}
        </button>
        <button
          className={`w-1/2 p-2 ${
            isCareerTab
              ? 'bg-foreground text-background'
              : 'bg-background text-foreground'
          }`}
          onClick={switchTab}
        >
          {t('education')}
        </button>
      </div>

      {/* Timeline */}
      <div className="snes-container p-4 md:p-6 bg-foreground mt-6">
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
    </div>
  );
}
