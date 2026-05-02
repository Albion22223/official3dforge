import { useState } from "react";
import { Mail, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

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
    await new Promise((r) => setTimeout(r, 800));
    setSending(false);
    setForm({ name: "", email: "", message: "" });
    toast.success("Message sent!", { description: "We'll get back to you within one business day." });
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Get in touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
            Got a wild idea? Tell us about it.
          </h2>
          <p className="text-muted-foreground mt-4">We love niche projects, weird geometry, and impossible deadlines.</p>
        </div>

        <form onSubmit={submit} className="rounded-3xl border border-border bg-gradient-card p-8 md:p-10 space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Name" error={errors.name}>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="w-full h-12 px-4 rounded-xl bg-background/60 border border-border focus:outline-none focus:border-primary transition-colors"
                placeholder="Ada Lovelace"
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="w-full h-12 px-4 rounded-xl bg-background/60 border border-border focus:outline-none focus:border-primary transition-colors"
                placeholder="ada@example.com"
              />
            </Field>
          </div>
          <Field label="Tell us about your project" error={errors.message}>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              rows={5}
              className="w-full p-4 rounded-xl bg-background/60 border border-border focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="I need a custom mount for…"
            />
            <div className="text-xs text-muted-foreground text-right mt-1">{form.message.length}/1000</div>
          </Field>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" /> hello@volumetrik.io
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition-transform disabled:opacity-60"
            >
              {sending ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : <>Send message <Send className="h-4 w-4" /></>}
            </button>
          </div>
        </form>
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

export default Contact;
