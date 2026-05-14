import { useState } from "react";
import { Mail, Phone, Send, Loader2, MapPin } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  business: z.string().trim().max(100),
  message: z.string().trim().min(10, "Please tell us a bit more").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);

    // Submit to Formspree — replace YOUR_FORM_ID with your Formspree form ID
    // Sign up free at formspree.io, create a form, get the ID
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          business: form.business,
          message: form.message,
        }),
      });
      if (res.ok) {
        toast.success("Message sent!", { description: "We'll get back to you within one business day." });
        setForm({ name: "", email: "", business: "", message: "" });
      } else {
        throw new Error("Failed");
      }
    } catch {
      // Fallback: open mailto link so the message still gets through
      const subject = encodeURIComponent(`3DForge inquiry from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nBusiness: ${form.business}\nEmail: ${form.email}\n\n${form.message}`
      );
      window.location.href = `mailto:hello@3dforge.io?subject=${subject}&body=${body}`;
      toast.success("Opening your email app…", { description: "Your message is ready to send." });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Get in touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
            Tell us what you need.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Whether it's a replacement part, a custom display, or an idea you're not sure is even possible — reach out. We'll figure it out together.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info sidebar */}
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-2xl border border-border bg-gradient-card p-6 space-y-5">
              <InfoRow icon={<MapPin className="h-4 w-4 text-primary" />} label="Location" value="Westchester County, NY" />
              <InfoRow icon={<Mail className="h-4 w-4 text-primary" />} label="Email" value="hello@3dforge.io" />
              <InfoRow icon={<Phone className="h-4 w-4 text-primary" />} label="Response time" value="Within 1 business day" />
            </div>
            <div className="rounded-2xl border border-border bg-gradient-card p-6">
              <p className="text-sm font-medium mb-2">Not sure what you need?</p>
              <p className="text-sm text-muted-foreground">Just describe the problem you're trying to solve. We'll suggest the best material, size, and approach — no technical knowledge required.</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="md:col-span-3 rounded-3xl border border-border bg-gradient-card p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your name" error={errors.name}>
                <input
                  value={form.name}
                  onChange={set("name")}
                  maxLength={100}
                  className="w-full h-12 px-4 rounded-xl bg-background/60 border border-border focus:outline-none focus:border-primary transition-colors"
                  placeholder="Jane Smith"
                />
              </Field>
              <Field label="Business name (optional)" error={errors.business}>
                <input
                  value={form.business}
                  onChange={set("business")}
                  maxLength={100}
                  className="w-full h-12 px-4 rounded-xl bg-background/60 border border-border focus:outline-none focus:border-primary transition-colors"
                  placeholder="Smith's Cafe"
                />
              </Field>
            </div>
            <Field label="Email" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={set("email")}
                maxLength={255}
                className="w-full h-12 px-4 rounded-xl bg-background/60 border border-border focus:outline-none focus:border-primary transition-colors"
                placeholder="jane@smithscafe.com"
              />
            </Field>
            <Field label="What do you need printed?" error={errors.message}>
              <textarea
                value={form.message}
                onChange={set("message")}
                maxLength={1000}
                rows={5}
                className="w-full p-4 rounded-xl bg-background/60 border border-border focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="e.g. A custom menu holder for our tables, roughly 15cm tall, in black…"
              />
              <div className="text-xs text-muted-foreground text-right mt-1">{form.message.length}/1000</div>
            </Field>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition-transform disabled:opacity-60 w-full justify-center"
            >
              {sending ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : <>Send message <Send className="h-4 w-4" /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="text-sm font-medium mb-2 block">{label}</span>
    {children}
    {error && <span className="text-xs text-destructive mt-1.5 block">{error}</span>}
  </label>
);

const InfoRow = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-start gap-3">
    <div className="mt-0.5">{icon}</div>
    <div>
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-sm font-medium">{value}</div>
    </div>
  </div>
);

export default Contact;
