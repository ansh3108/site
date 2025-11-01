import { Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socials = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/ansh3108', color: 'text-primary' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/ansh-kumar-tech/', color: 'text-primary' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/__0day_/', color: 'text-secondary' },
  { name: 'Email', icon: Mail, url: 'mailto:hello@anshk.dev', color: 'text-secondary' },
];

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl font-bold font-mono mb-16 text-center text-gradient-cyan">
          <span className="text-primary glow-cyan-text">//</span> Get In Touch
        </h2>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          
          <div className="relative bg-card border-2 border-primary/30 rounded-xl p-8 md:p-12 glow-cyan">
            <div className="text-center space-y-6 mb-8">
              <p className="text-lg font-mono text-muted-foreground">
                <span className="text-primary glow-cyan-text">&gt;</span> Open for collaborations and opportunities
              </p>
              <p className="text-foreground/90 font-sans max-w-xl mx-auto">
                Whether you want to discuss a project, explore collaboration opportunities, or just say hi, 
                feel free to reach out. I'm always excited to connect with fellow builders!
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    className="perspective-card h-24 flex flex-col gap-2 border-border hover:border-primary/50 hover:glow-cyan bg-muted/50 transition-all duration-300"
                    asChild
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      <Icon className={`w-6 h-6 ${social.color}`} />
                      <span className="text-sm font-mono">{social.name}</span>
                    </a>
                  </Button>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <Button
                size="lg"
                className="font-mono bg-primary text-primary-foreground hover:bg-primary-glow glow-cyan transition-all duration-300"
                asChild
              >
                <a href="mailto:hello@anshk.dev">
                  Send a Message
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
