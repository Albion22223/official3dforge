import { Box, Mail, MapPin } from "lucide-react";

const links = [
  { href: "#why", label: "Why 3DForge" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 mt-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 font-display font-semibold text-lg mb-3">
              <span className="grid place-items-center h-7 w-7 rounded-md bg-gradient-primary">
                <Box className="h-3.5 w-3.5 text-primary-foreground" />
              </span>
              3DForge
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Local 3D printing for Westchester businesses. Fast, affordable, and built to spec.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium mb-3">Navigation</p>
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium mb-3">Get in touch</p>
            <div className="space-y-2">
              <a href="mailto:hello@3dforge.io" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" /> hello@3dforge.io
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" /> Westchester County, NY
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 3DForge. Built locally, printed with precision.</p>
          <p className="text-xs text-muted-foreground">Serving all of Westchester County</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
