import heroImg from "@/assets/hero-printer.jpg";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 bg-mesh opacity-80" aria-hidden />
      <div className="absolute inset-0 grid-noise" aria-hidden />
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur text-xs font-medium text-muted-foreground mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
              Now accepting custom orders · 48hr turnaround
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-gradient">
              Your idea, printed in precision.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Upload a model. Pick a material. We'll deliver an industrial-grade 3D print to your door — fast, accurate, and built to last.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#quote" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-[0_0_80px_-10px_hsl(var(--primary)/0.7)]">
                Get instant quote
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href="#process" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-card/40 backdrop-blur text-foreground font-medium hover:bg-card/70 transition-colors">
                See how it works
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "12k+", l: "Prints shipped" },
                { v: "0.2mm", l: "Layer precision" },
                { v: "24+", l: "Materials" },
              ].map((s) => (
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
                alt="Industrial 3D printer creating a glowing geometric sculpture"
                width={1536}
                height={1280}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
