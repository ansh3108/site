import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [showSubtext, setShowSubtext] = useState(false);
  const fullText = 'anshk.dev';
  const subText = "GM! BUIDL'ers";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowSubtext(true), 200);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <div className="text-center space-y-6">
        <div className="font-mono text-lg md:text-xl text-muted-foreground mb-8">
          <span className="text-primary glow-cyan-text">&gt;</span>{' '}
          <span className="glow-cyan-text">{displayText}</span>
          <span className="animate-blink text-primary">_</span>
        </div>
        
        {showSubtext && (
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono text-gradient-cyan animate-fade-in">
            {subText}
          </h1>
        )}
        
        {showSubtext && (
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in font-sans">
            powered by caffeine!
          </p>
        )}
      </div>

      <div className="absolute bottom-12 animate-float">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm font-mono">Scroll ↓</span>
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
