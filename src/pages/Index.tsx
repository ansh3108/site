import ParticleBackground from '@/components/ParticleBackground';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
