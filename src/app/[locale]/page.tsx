import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import About from '@/components/About';
import TechStackGrid from '@/components/TechStackGrid';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <TechStackGrid />
      <Experience />
      <Projects />
      <Blog />
    </div>
  );
}
