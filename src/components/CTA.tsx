import { Upload } from "lucide-react";

const CTA = () => {
  return (
    <section id="quote" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-mesh opacity-60" aria-hidden />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-[40rem] bg-primary/30 blur-3xl rounded-full animate-glow-pulse" aria-hidden />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight text-gradient mb-6">
              Drop a file. Get a quote in seconds.
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              No account required. Upload your model and we'll send you instant pricing across every material we offer.
            </p>
            <a
              href="#"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition-transform"
            >
              <Upload className="h-5 w-5" />
              Upload your model
            </a>
            <p className="text-xs text-muted-foreground mt-6">Accepts STL, OBJ, STEP, 3MF · Max 200MB</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
