import { useCallback, useMemo, useRef, useState } from "react";
import { Upload, FileBox, X, ArrowRight, Loader2, Mail } from "lucide-react";
import { toast } from "sonner";

const materials = [
  { id: "pla", name: "PLA", desc: "Everyday parts", multiplier: 1.0 },
  { id: "petg", name: "PETG", desc: "Tough & flexible", multiplier: 1.3 },
  { id: "abs", name: "ABS", desc: "Heat resistant", multiplier: 1.5 },
  { id: "resin", name: "SLA Resin", desc: "Ultra-fine detail", multiplier: 2.2 },
  { id: "nylon", name: "Nylon", desc: "Engineering grade", multiplier: 2.6 },
  { id: "carbon", name: "Carbon Fiber", desc: "Maximum strength", multiplier: 3.4 },
];

const finishes = [
  { id: "standard", name: "Standard", multiplier: 1.0 },
  { id: "sanded", name: "Sanded", multiplier: 1.25 },
  { id: "painted", name: "Painted", multiplier: 1.6 },
];

const sizes = [
  { id: "s", name: "Small", desc: "< 5cm", base: 12 },
  { id: "m", name: "Medium", desc: "5–15cm", base: 28 },
  { id: "l", name: "Large", desc: "15–25cm", base: 58 },
  { id: "xl", name: "X-Large", desc: "> 25cm", base: 110 },
];

const QuoteBuilder = () => {
  const [file, setFile] = useState<File | null>(null);
  const [material, setMaterial] = useState(materials[0].id);
  const [finish, setFinish] = useState(finishes[0].id);
  const [size, setSize] = useState(sizes[1].id);
  const [qty, setQty] = useState(1);
  const [email, setEmail] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const price = useMemo(() => {
    const s = sizes.find((x) => x.id === size)!;
    const m = materials.find((x) => x.id === material)!;
    const f = finishes.find((x) => x.id === finish)!;
    const q = Math.max(1, Math.min(999, qty));
    const unit = s.base * m.multiplier * f.multiplier;
    const bulk = q >= 10 ? 0.85 : q >= 5 ? 0.92 : 1;
    return { unit: unit * bulk, total: unit * bulk * q };
  }, [material, finish, size, qty]);

  const acceptFile = useCallback((f: File | undefined | null) => {
    if (!f) return;
    const okExt = /\.(stl|obj|step|stp|3mf)$/i.test(f.name);
    const okSize = f.size <= 200 * 1024 * 1024;
    if (!okExt) { toast.error("Unsupported file", { description: "Use STL, OBJ, STEP, or 3MF." }); return; }
    if (!okSize) { toast.error("File too large", { description: "Max 200MB." }); return; }
    setFile(f);
    toast.success("Model received", { description: f.name });
  }, []);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    acceptFile(e.dataTransfer.files?.[0]);
  };

  const submit = async () => {
    if (!email) { toast.error("Please enter your email so we can send you the quote."); return; }
    setSubmitting(true);

    const mat = materials.find((m) => m.id === material)!;
    const siz = sizes.find((s) => s.id === size)!;
    const fin = finishes.find((f) => f.id === finish)!;

    const subject = encodeURIComponent("3DForge Quote Request");
    const body = encodeURIComponent(
      `Hi, I'd like a quote for the following:\n\nMaterial: ${mat.name}\nSize: ${siz.name} (${siz.desc})\nFinish: ${fin.name}\nQuantity: ${qty}\nEstimated price: $${price.total.toFixed(2)}\n\nMy email: ${email}\n${file ? `File: ${file.name}` : "No file attached — I'll describe what I need."}\n\nPlease confirm the final price and turnaround time. Thanks!`
    );

    // Open mailto — reliable fallback that always works
    window.location.href = `mailto:hello@3dforge.io?subject=${subject}&body=${body}`;

    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    toast.success("Quote request ready!", { description: `Estimated $${price.total.toFixed(2)} · we'll confirm within a few hours.` });
  };

  return (
    <section id="quote" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-6 md:p-12">
          <div className="absolute inset-0 bg-mesh opacity-50" aria-hidden />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[40rem] bg-primary/20 blur-3xl rounded-full" aria-hidden />

          <div className="relative z-10 grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left: form */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Instant estimate</p>
                <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-gradient">
                  Build your quote.
                </h2>
                <p className="text-muted-foreground mt-3">Pick your options and get an instant price estimate. No account required — we'll confirm the final price by email.</p>
              </div>

              {/* Dropzone */}
              <div>
                <label className="text-sm font-medium mb-3 block">Model file (optional)</label>
                <div
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={onDrop}
                  onClick={() => inputRef.current?.click()}
                  className={`group cursor-pointer rounded-2xl border-2 border-dashed p-8 text-center transition-all ${
                    dragOver ? "border-primary bg-primary/10" : "border-border bg-background/40 hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  <input ref={inputRef} type="file" accept=".stl,.obj,.step,.stp,.3mf" className="hidden" onChange={(e) => acceptFile(e.target.files?.[0])} />
                  {file ? (
                    <div className="flex items-center justify-between gap-3 text-left">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-primary shadow-glow flex-shrink-0">
                          <FileBox className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-medium truncate">{file.name}</div>
                          <div className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</div>
                        </div>
                      </div>
                      <button onClick={(e) => { e.stopPropagation(); setFile(null); }} className="p-2 rounded-full hover:bg-secondary transition-colors flex-shrink-0" aria-label="Remove file">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-3">
                      <div className="grid place-items-center h-12 w-12 rounded-2xl bg-secondary group-hover:bg-primary/20 transition-colors">
                        <Upload className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Drop your model here</div>
                        <div className="text-sm text-muted-foreground mt-1">STL · OBJ · STEP · 3MF · Max 200MB</div>
                        <div className="text-xs text-muted-foreground mt-1">Don't have a file? No problem — just describe what you need in the contact form.</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Materials */}
              <div>
                <label className="text-sm font-medium mb-3 block">Material</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {materials.map((m) => (
                    <button key={m.id} onClick={() => setMaterial(m.id)} className={`text-left p-3 rounded-xl border transition-all ${material === m.id ? "border-primary bg-primary/10 shadow-glow" : "border-border bg-background/40 hover:border-primary/40"}`}>
                      <div className="font-medium text-sm">{m.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{m.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size + Finish */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-3 block">Size</label>
                  <div className="grid grid-cols-2 gap-2">
                    {sizes.map((s) => (
                      <button key={s.id} onClick={() => setSize(s.id)} className={`text-left p-3 rounded-xl border transition-all ${size === s.id ? "border-primary bg-primary/10" : "border-border bg-background/40 hover:border-primary/40"}`}>
                        <div className="font-medium text-sm">{s.name}</div>
                        <div className="text-xs text-muted-foreground">{s.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-3 block">Finish</label>
                  <div className="space-y-2">
                    {finishes.map((f) => (
                      <button key={f.id} onClick={() => setFinish(f.id)} className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between ${finish === f.id ? "border-primary bg-primary/10" : "border-border bg-background/40 hover:border-primary/40"}`}>
                        <span className="font-medium text-sm">{f.name}</span>
                        <span className="text-xs text-muted-foreground">×{f.multiplier.toFixed(2)}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="text-sm font-medium mb-3 block">Quantity</label>
                <div className="flex items-center gap-3">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="h-11 w-11 rounded-xl border border-border bg-background/40 hover:border-primary/40 transition-colors">−</button>
                  <input
                    type="number" min={1} max={999} value={qty}
                    onChange={(e) => setQty(Math.max(1, Math.min(999, parseInt(e.target.value) || 1)))}
                    className="h-11 w-24 text-center rounded-xl border border-border bg-background/40 font-display text-lg focus:outline-none focus:border-primary"
                  />
                  <button onClick={() => setQty((q) => Math.min(999, q + 1))} className="h-11 w-11 rounded-xl border border-border bg-background/40 hover:border-primary/40 transition-colors">+</button>
                  {qty >= 5 && (
                    <span className="ml-2 text-xs text-primary font-medium">
                      {qty >= 10 ? "15% bulk discount" : "8% bulk discount"} applied
                    </span>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium mb-3 block">Your email — we'll send the confirmed quote here</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@yourbusiness.com"
                    className="w-full h-12 pl-10 pr-4 rounded-xl border border-border bg-background/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Right: price summary */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-28 rounded-2xl border border-primary/30 bg-background/60 backdrop-blur-xl p-6 shadow-elegant">
                <div className="text-sm text-muted-foreground">Estimated total</div>
                <div className="font-display text-5xl md:text-6xl font-semibold text-gradient mt-1 tabular-nums">
                  ${price.total.toFixed(2)}
                </div>
                <div className="text-sm text-muted-foreground mt-1 tabular-nums">
                  ${price.unit.toFixed(2)} × {qty} unit{qty > 1 ? "s" : ""}
                </div>

                <div className="my-6 h-px bg-border" />

                <dl className="space-y-3 text-sm">
                  <Row label="Material" value={materials.find((m) => m.id === material)!.name} />
                  <Row label="Size" value={sizes.find((s) => s.id === size)!.name} />
                  <Row label="Finish" value={finishes.find((f) => f.id === finish)!.name} />
                  <Row label="Ships in" value="48 hours" />
                </dl>

                <button
                  onClick={submit}
                  disabled={submitting}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:hover:scale-100"
                >
                  {submitting ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Opening email…</>
                  ) : (
                    <>Request this quote <ArrowRight className="h-4 w-4" /></>
                  )}
                </button>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Final price confirmed after we review your specs. No payment now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between">
    <dt className="text-muted-foreground">{label}</dt>
    <dd className="font-medium">{value}</dd>
  </div>
);

export default QuoteBuilder;
