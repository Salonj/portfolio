import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Tech {
  name: string;
  color: string;
}

interface LogoFetcherProps {
  techStack: Tech[];
}

const LogoFetcher: React.FC<LogoFetcherProps> = ({ techStack }) => {
  const [logos, setLogos] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    // Fetch logos for each tech in the stack
    const fetchLogos = async () => {
      const fetchedLogos: { [key: string]: string } = {};

      for (const tech of techStack) {
        try {
          const logoURL = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.name.toLowerCase()}/${tech.name.toLowerCase()}-original.svg`;
          const response = await fetch(logoURL);
          if (response.ok) {
            fetchedLogos[tech.name] = logoURL;
          } else {
            console.warn(`Logo not found for ${tech.name}`);
          }
        } catch (error) {
          console.error(`Error fetching logo for ${tech.name}:`, error);
        }
      }

      setLogos(fetchedLogos);
    };

    fetchLogos();
  }, [techStack]);

  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {techStack.map((tech) => (
        <div key={tech.name} className="">
          {logos[tech.name] ? (
            <Image
              src={logos[tech.name]}
              alt={`${tech.name} logo`}
              className="w-12 h-12 object-contain rounded-md"
              width={32}
              height={32}
            />
          ) : (
            <Image
              src="/placeholder.svg"
              alt="Placeholder"
              className="w-12 h-12 object-contain rounded-md"
              width={32}
              height={32}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default LogoFetcher;
