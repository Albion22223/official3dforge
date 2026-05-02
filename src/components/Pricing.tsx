import { Check } from "lucide-react";

const tiers = [
  {
    name: "Prototype",
    price: "$19",
    unit: "/part",
    desc: "Single prints for testing fits and ideas.",
    features: ["FDM print, PLA or PETG", "Standard 0.2mm layers", "48-hour ship", "Basic finishing"],
  },
  {
    name: "Studio",
    price: "$49",
    unit: "/part",
    desc: "Production-ready parts with premium finish.",
    features: ["SLA or premium FDM", "0.2mm layer precision", "24-hour rush available", "Sanded & primed finish", "Color matching"],
    featured: true,
  },
  {
    name: "Workshop",
    price: "Custom",
    unit: "",
    desc: "Batch runs and ongoing manufacturing.",
    features: ["Volume discounts", "Dedicated account manager", "Material consulting", "NDA & IP protection", "Net-30 terms"],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Pricing</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
            Transparent pricing. No surprises.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative p-8 rounded-3xl border transition-all ${
                t.featured
                  ? "border-primary/50 bg-gradient-card shadow-glow"
                  : "border-border bg-gradient-card hover:border-primary/30"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-8 px-3 py-1 text-xs font-medium rounded-full bg-gradient-primary text-primary-foreground">
                  Most popular
                </div>
              )}
              <h3 className="font-display text-xl font-semibold mb-2">{t.name}</h3>
              <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">{t.desc}</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-display text-5xl font-semibold">{t.price}</span>
                <span className="text-muted-foreground">{t.unit}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#quote"
                className={`block text-center w-full py-3 rounded-full font-medium transition-all ${
                  t.featured
                    ? "bg-gradient-primary text-primary-foreground hover:scale-[1.02]"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
