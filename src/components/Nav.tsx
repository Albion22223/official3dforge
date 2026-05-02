import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#process", label: "Process" },
  { href: "#quote", label: "Quote" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container">
        <nav className={`mt-4 flex items-center justify-between rounded-full border px-5 py-3 transition-all ${
          scrolled ? "border-border bg-background/80 backdrop-blur-xl shadow-elegant" : "border-border/50 bg-background/40 backdrop-blur-md"
        }`}>
          <a href="#" className="flex items-center gap-2 font-display font-semibold text-lg">
            <img src={logo} alt="3DForge logo" width={32} height={32} className="h-8 w-8 object-contain" />
            3DForge
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
            ))}
          </div>
          <a href="#quote" className="hidden md:inline-flex text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity">
            Start a project
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-9 w-9 grid place-items-center rounded-full border border-border"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-border bg-background/95 backdrop-blur-xl p-4 shadow-elegant animate-fade-up">
            <div className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-xl text-foreground hover:bg-secondary transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#quote"
                onClick={() => setOpen(false)}
                className="mt-2 text-center px-4 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium"
              >
                Start a project
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
