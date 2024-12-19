import React from 'react';
import { GithubIcon } from './svgs';
import { GlobeIcon } from './svgs';

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  techStack: { name: string; color: string }[];
  links: { name: string; href: string; icon: string }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  image,
  techStack,
  links,
}) => {
  // Find specific links
  const githubLink = links.find((link) => link.name === 'GitHub');
  const liveLink = links.find((link) => link.name === 'Live');

  return (
    <div className="snes-container bg-foreground p-0 flex flex-col justify-between">
      {/* Project Image */}
      <div className="flex flex-col">
        <img
          src={image}
          alt={`${name} project screenshot`}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold text-primary mb-2">{name}</h3>
        <p className="text-xs text-background mb-4">{description}</p>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="text-xs text-background px-2 py-1 rounded-md"
            style={{ backgroundColor: tech.color }}
          >
            {tech.name}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        {githubLink && (
          <a
            href={githubLink.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-xs rounded-md hover:bg-purple-800 transition"
            aria-label="GitHub"
          >
            <GithubIcon className="w-6 h-6 md:w-8 md:h-8" />
            GitHub
          </a>
        )}

        {/* Live Link */}
        {liveLink && (
          <a
            href={liveLink.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-xs rounded-md hover:bg-green-500 transition"
            aria-label="Live Website"
          >
            <GlobeIcon className="w-6 h-6 md:w-8 md:h-8" />
            Live
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
