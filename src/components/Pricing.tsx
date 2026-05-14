import { Check, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "One-Off",
    price: "$19",
    unit: "/part",
    desc: "Perfect for a single replacement part, prototype, or test piece.",
    features: [
      "FDM print — PLA or PETG",
      "Standard 0.2mm precision",
      "Ships within 48 hours",
      "Basic finishing",
      "Free reprint if unsatisfied",
    ],
  },
  {
    name: "Business",
    price: "$49",
    unit: "/part",
    desc: "Production-ready parts for your shop, office, or storefront.",
    features: [
      "SLA resin or premium FDM",
      "0.2mm layer precision",
      "24-hour rush available",
      "Sanded & primed finish",
      "Color matching",
      "Free reprint guarantee",
    ],
    featured: true,
  },
  {
    name: "Ongoing",
    price: "Custom",
    unit: "",
    desc: "Regular orders, bulk runs, and ongoing local manufacturing.",
    features: [
      "Volume pricing — up to 30% off",
      "Priority turnaround",
      "Dedicated point of contact",
      "Material & design consulting",
      "Flexible billing — pay monthly",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Pricing</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
            Simple pricing for every business.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">No minimums. No surprise fees. Just a fair price for quality local work.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative p-8 rounded-3xl border transition-all flex flex-col ${
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
              <div>
                <h3 className="font-display text-xl font-semibold mb-2">{t.name}</h3>
                <p className="text-sm text-muted-foreground mb-6 min-h-[48px]">{t.desc}</p>
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
              </div>
              <div className="mt-auto">
                <a
                  href="#contact"
                  className={`group flex items-center justify-center gap-2 w-full py-3 rounded-full font-medium transition-all ${
                    t.featured
                      ? "bg-gradient-primary text-primary-foreground hover:scale-[1.02]"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
                  }`}
                >
                  {t.price === "Custom" ? "Get in touch" : "Get started"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
          Not sure which plan fits? <a href="#contact" className="text-primary hover:underline">Send us a message</a> and we'll figure it out together.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
