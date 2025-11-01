const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-mono text-sm text-muted-foreground">
          <span className="text-primary glow-cyan-text">&gt;</span> Made with{' '}
          <span className="text-secondary glow-magenta-text">♥</span> + JavaScript
        </p>
        <p className="font-mono text-xs text-muted-foreground/60 mt-2">
          © {new Date().getFullYear()} Ansh Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
