import Experience from '@/components/Experience';
import TechStackGrid from '@/components/TechStack';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';

export default function HomePage() {
  return (
    <div className="mt-8 flex flex-col gap-8 px-8">
      <About />
    </div>
  );
}
