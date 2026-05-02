import { Box } from "lucide-react";

const Nav = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container">
        <nav className="mt-4 flex items-center justify-between rounded-full border border-border bg-background/70 backdrop-blur-xl px-5 py-3 shadow-soft">
          <a href="#" className="flex items-center gap-2 font-display font-semibold text-lg">
            <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-primary shadow-glow">
              <Box className="h-4 w-4 text-primary-foreground" />
            </span>
            Volumetrik
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#process" className="hover:text-foreground transition-colors">Process</a>
            <a href="#materials" className="hover:text-foreground transition-colors">Materials</a>
            <a href="#showcase" className="hover:text-foreground transition-colors">Showcase</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          </div>
          <a href="#quote" className="text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity">
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
