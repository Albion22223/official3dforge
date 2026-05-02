import { Box } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 mt-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-display font-semibold">
            <span className="grid place-items-center h-7 w-7 rounded-md bg-gradient-primary">
              <Box className="h-3.5 w-3.5 text-primary-foreground" />
            </span>
            Volumetrik
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Process</a>
            <a href="#" className="hover:text-foreground transition-colors">Materials</a>
            <a href="#" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Volumetrik. Made with precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
