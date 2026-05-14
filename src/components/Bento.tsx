import latticeImg from "@/assets/print-lattice.jpg";
import nozzleImg from "@/assets/print-nozzle.jpg";
import collectionImg from "@/assets/print-collection.jpg";
import { Layers, Zap, Ruler, Palette, MapPin, ShieldCheck } from "lucide-react";

const Bento = () => {
  return (
    <section id="why" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Why 3DForge</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
            Local expertise. Professional results.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5 auto-rows-[180px]">
          {/* Big tile */}
          <div className="md:col-span-3 md:row-span-2 group relative overflow-hidden rounded-3xl border border-border bg-gradient-card shadow-elegant">
            <img src={latticeImg} alt="Intricate 3D printed lattice structure" loading="lazy" width={1024} height={1024} className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-8">
              <Layers className="h-6 w-6 text-primary mb-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-2">Any shape. Any part. No minimums.</h3>
              <p className="text-muted-foreground max-w-md">From a single replacement bracket to a run of custom displays — we print exactly what your business needs, one piece at a time.</p>
            </div>
          </div>

          {/* Speed */}
          <div className="md:col-span-3 group relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-7">
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-colors" />
            <Zap className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-display text-xl font-semibold mb-1.5">Ready in 48 hours</h3>
            <p className="text-sm text-muted-foreground">Most orders ship within two business days. Rush jobs available — just ask.</p>
          </div>

          {/* Materials */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-7">
            <Palette className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-display text-xl font-semibold mb-1.5">24+ materials</h3>
            <p className="text-sm text-muted-foreground">PLA, PETG, ABS, resin, nylon, TPU, carbon-fiber composites — food-safe options available.</p>
          </div>

          {/* Precision stat */}
          <div className="md:col-span-1 group relative overflow-hidden rounded-3xl border border-border bg-gradient-primary p-6 text-primary-foreground">
            <Ruler className="h-5 w-5 mb-3" />
            <div className="font-display text-3xl font-semibold leading-none">0.2<span className="text-base">mm</span></div>
            <div className="text-xs opacity-80 mt-1">layer precision</div>
          </div>

          {/* Nozzle image tile */}
          <div className="md:col-span-3 md:row-span-2 group relative overflow-hidden rounded-3xl border border-border shadow-elegant">
            <img src={nozzleImg} alt="3D printer nozzle in action" loading="lazy" width={1024} height={1280} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/30 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-8">
              <p className="text-sm text-primary font-medium mb-2">Tuned for quality</p>
              <h3 className="font-display text-2xl md:text-3xl font-semibold">Studio-grade machines, hand-tuned for every job.</h3>
            </div>
          </div>

          {/* Local */}
          <div className="md:col-span-3 group relative overflow-hidden rounded-3xl border border-border bg-gradient-card">
            <img src={collectionImg} alt="Collection of 3D printed business parts" loading="lazy" width={1280} height={1024} className="absolute inset-0 w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-center p-7">
              <MapPin className="h-6 w-6 text-primary mb-3" />
              <h3 className="font-display text-xl font-semibold mb-1.5">Right here in Westchester</h3>
              <p className="text-sm text-muted-foreground max-w-xs">Local pickup available. No shipping wait. Talk directly to the person printing your parts.</p>
            </div>
          </div>

          {/* Guarantee */}
          <div className="md:col-span-3 group relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-7">
            <ShieldCheck className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-display text-xl font-semibold mb-1.5">Satisfaction guaranteed</h3>
            <p className="text-sm text-muted-foreground">Not happy with the result? We reprint it, free of charge — no questions asked.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bento;
