import { Code2, Database, Palette, Zap, Globe, Lock } from 'lucide-react';

const technologies = [
  { name: 'React', icon: Code2, category: 'Frontend' },
  { name: 'Node.js', icon: Zap, category: 'Backend' },
  { name: 'TypeScript', icon: Code2, category: 'Language' },
  { name: 'TailwindCSS', icon: Palette, category: 'Styling' },
  { name: 'PostgreSQL', icon: Database, category: 'Database' },
  { name: 'Solana', icon: Lock, category: 'Blockchain' },
  { name: 'Next.js', icon: Globe, category: 'Framework' },
  { name: 'Rust', icon: Zap, category: 'Systems' },
];

const TechStack = () => {
  return (
    <section className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold font-mono mb-16 text-gradient-cyan">
          <span className="text-primary glow-cyan-text">//</span> Tech Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="perspective-card group relative bg-card border border-border rounded-lg p-6 hover:border-secondary/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex flex-col items-center gap-3 text-center">
                  <div className="p-3 rounded-lg bg-muted group-hover:glow-magenta transition-all duration-300">
                    <Icon className="w-8 h-8 text-secondary group-hover:text-secondary-glow" />
                  </div>
                  <div>
                    <h3 className="font-mono font-semibold text-foreground group-hover:text-gradient-magenta transition-all">
                      {tech.name}
                    </h3>
                    <p className="text-xs text-muted-foreground font-sans mt-1">{tech.category}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <h3 className="text-2xl font-mono font-bold mb-4 text-gradient-magenta">
            <span className="text-secondary glow-magenta-text">❯</span> Learning & Building!
          </h3>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Always exploring new technologies and pushing boundaries. Currently diving deep into 
            AI/ML integrations, Web3 infrastructure, and modern DevOps practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
