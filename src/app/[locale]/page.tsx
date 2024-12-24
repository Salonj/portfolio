import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import About from '@/components/About';
import TechStackGrid from '@/components/TechStackGrid';

export default function HomePage() {
  return (
    <div className="mt-8 flex flex-col gap-8">
      <Hero />
      <About />
      <TechStackGrid />
      <Experience />
      <Projects />
      <Blog />
    </div>
  );
}
