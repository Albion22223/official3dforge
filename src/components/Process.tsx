import { Upload, Cog, Package } from "lucide-react";

const steps = [
  { icon: Upload, n: "01", title: "Upload your model", desc: "Drag in a STL, OBJ, STEP or 3MF file. We'll auto-check it for printability and flag any issues instantly." },
  { icon: Cog, n: "02", title: "Choose material & finish", desc: "Pick from 24+ materials and 6 finishes. Live pricing updates as you tweak settings." },
  { icon: Package, n: "03", title: "We print & ship", desc: "Your order hits the printer the same day. Tracked delivery within 48 hours of completion." },
];

const Process = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">How it works</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
            From file to finished part in three steps.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <div key={s.n} className="relative group p-8 rounded-3xl border border-border bg-gradient-card hover:border-primary/40 transition-colors">
              <div className="flex items-center justify-between mb-8">
                <span className="font-display text-sm text-muted-foreground tracking-widest">{s.n}</span>
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 h-px w-6 bg-gradient-to-r from-border to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
