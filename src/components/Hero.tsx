import heroImg from "@/assets/hero-printer.jpg";
import { ArrowUpRight, MapPin } from "lucide-react";

const stats = [
  { v: "48hr", l: "Turnaround" },
  { v: "0.2mm", l: "Precision" },
  { v: "24+", l: "Materials" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 bg-mesh opacity-80" aria-hidden />
      <div className="absolute inset-0 grid-noise" aria-hidden />
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur text-xs font-medium text-muted-foreground mb-6">
              <MapPin className="h-3 w-3 text-primary" />
              Serving Westchester County · Local, fast, personal
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-gradient">
              Custom 3D printing for your local business.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Need a replacement part, a custom display, a branded fixture, or something totally unique? We print it locally — fast, affordable, and built to spec.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#quote"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-[0_0_80px_-10px_hsl(var(--primary)/0.7)]"
              >
                Get a free quote
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-card/40 backdrop-blur text-foreground font-medium hover:bg-card/70 transition-colors"
              >
                See how it works
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {stats.map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl md:text-3xl font-semibold text-foreground">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-8 bg-gradient-primary opacity-30 blur-3xl rounded-full animate-glow-pulse" aria-hidden />
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-elegant animate-float">
              <img
                src={heroImg}
                alt="3D printer creating a custom part"
                width={1536}
                height={1280}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-2xl bg-background/80 backdrop-blur border border-border p-3 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">Currently printing orders for Westchester businesses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
