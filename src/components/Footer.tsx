const Footer = () => {
  return (
    <footer className="section-padding py-16 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <span className="font-display text-xl font-semibold tracking-wider text-foreground">
            SOA
          </span>
          <p className="font-body text-sm text-muted-foreground mt-1 font-light">
            Sons of Architecture
          </p>
        </div>

        <nav className="flex gap-8">
          <a href="#projekty" className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
            Projekty
          </a>
          <a href="#o-nas" className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
            O nás
          </a>
          <a href="#kontakt" className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
            Kontakt
          </a>
        </nav>
      </div>

      <div className="mt-12 pt-8 border-t border-border">
        <p className="font-body text-xs text-muted-foreground font-light">
          © {new Date().getFullYear()} SOA – Sons of Architecture
        </p>
      </div>
    </footer>
  );
};

export default Footer;
