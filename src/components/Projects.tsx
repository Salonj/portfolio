import ProjectGrid from './ProjectGrid';

const LIMIT_PROJECTS = 2;

export default function Projects() {
  return (
    <div className="flex flex-col mt-10">
      <div className="flex flex-row items-center justify-between mb-4">
        <h2 className="text-2xl">Projects</h2>
        <p className="text-foreground cursor-pointer hover:underline">
          View More
        </p>
      </div>
      <ProjectGrid LIMIT_PROJECTS={LIMIT_PROJECTS} />
    </div>
  );
}
