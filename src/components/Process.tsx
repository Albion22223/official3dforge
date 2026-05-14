import { MessageSquare, Printer, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    n: "01",
    title: "Tell us what you need",
    desc: "No CAD file? No problem. Describe what you're looking for — a part, a fixture, a display — and we'll handle the design. If you have a file, even better.",
  },
  {
    icon: Printer,
    n: "02",
    title: "We print it to spec",
    desc: "We pick the best material and settings for your job. You'll get a price upfront, no surprises. Most orders are on the printer the same day.",
  },
  {
    icon: PackageCheck,
    n: "03",
    title: "Pick it up or get it delivered",
    desc: "Ready within 48 hours. Local pickup available in Westchester — or we'll ship it straight to your door, tracked and insured.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">How it works</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
            Simple as sending a text.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">You don't need to know anything about 3D printing. Just tell us the problem — we'll take it from there.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative group p-8 rounded-3xl border border-border bg-gradient-card hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display text-sm text-muted-foreground tracking-widest">{s.n}</span>
                <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 h-px w-6 bg-gradient-to-r from-border to-transparent" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition-transform"
          >
            Start with a free consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
