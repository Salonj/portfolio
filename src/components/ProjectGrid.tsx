import projectsData from '@/data/projectsData.json';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  LIMIT_PROJECTS: number;
}

export default function ProjectGrid({ LIMIT_PROJECTS }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projectsData.projectsData
        .slice(0, LIMIT_PROJECTS)
        .map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            image={project.image}
            techStack={project.techStack}
            links={project.links}
            about={project.about || ''}
            learn={project.learn || ''}
          />
        ))}
    </div>
  );
}
