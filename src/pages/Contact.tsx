import { useState } from "react";
import type { FormEvent } from "react";
import { Eyebrow, Reveal } from "@/components/ui-primitives";
import { contactReasons, person } from "@/data/content";

interface FormState {
  name: string;
  email: string;
  organization: string;
  reason: string;
  message: string;
}

const initial: FormState = { name: "", email: "", organization: "", reason: "", message: "" };

// Delivers submissions straight to Sam's inbox via FormSubmit.
const ENDPOINT = `https://formsubmit.co/ajax/${person.email}`;

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: keyof FormState) => (e: { target: { value: string } }) => {
    setForm({ ...form, [k]: e.target.value });
    setErrors({ ...errors, [k]: undefined });
  };

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (form.name.trim().length < 2) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.reason) next.reason = "Select a reason.";
    if (form.message.trim().length < 10) next.message = "Write a short message (10 characters or more).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Portfolio contact: ${form.reason} — ${form.name}`,
          _replyto: form.email,
          _template: "table",
          name: form.name,
          email: form.email,
          organization: form.organization || "—",
          reason: form.reason,
          message: form.message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && (data.success === "true" || data.success === true)) {
        setStatus("sent");
        setForm(initial);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const field =
    "w-full rounded-md border border-border bg-ink-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ember focus:outline-none focus:ring-1 focus:ring-ember";
  const label = "mb-2 block font-mono2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground";
  const err = "mt-1.5 text-xs text-ember";

  return (
    <section className="container-x pb-24 pt-32 md:pt-40">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <Eyebrow index="01">Contact</Eyebrow>
          <h1 className="mt-6 font-display text-4xl font-light leading-tight md:text-6xl">
            Let's start a conversation<span className="text-ember">.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Do you have a job opportunity, a design project, or a team that needs jerseys? Send me a message.
            It goes straight to my inbox, and I reply personally.
          </p>
          <div className="mt-10 space-y-4">
            <div>
              <p className={label}>Email</p>
              <a href={`mailto:${person.email}`} className="text-lg transition-colors hover:text-ember">
                {person.email}
              </a>
            </div>
            <div>
              <p className={label}>Location</p>
              <p className="text-lg">{person.location}</p>
            </div>
            <div>
              <p className={label}>Elsewhere</p>
              <div className="flex gap-5">
                {person.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground underline-offset-4 transition-colors hover:text-ember hover:underline"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {status === "sent" ? (
            <div className="rounded-lg border border-ember/40 bg-ink-2 p-10 text-center">
              <p className="font-display text-3xl">Message sent.</p>
              <p className="mt-4 text-muted-foreground">
                Thanks for reaching out. Your message is in my inbox — I will get back to you soon.
                You can also email me directly at{" "}
                <a href={`mailto:${person.email}`} className="text-ember underline">
                  {person.email}
                </a>
                .
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 rounded-full border border-border px-6 py-2.5 text-sm text-muted-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-6 rounded-lg border border-border bg-ink-2 p-8 md:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={label}>
                    Name *
                  </label>
                  <input id="name" className={field} value={form.name} onChange={set("name")} placeholder="Your name" />
                  {errors.name && <p className={err}>{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className={label}>
                    Email *
                  </label>
                  <input id="email" type="email" className={field} value={form.email} onChange={set("email")} placeholder="you@example.com" />
                  {errors.email && <p className={err}>{errors.email}</p>}
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="organization" className={label}>
                    Organization
                  </label>
                  <input id="organization" className={field} value={form.organization} onChange={set("organization")} placeholder="Company, school, club…" />
                </div>
                <div>
                  <label htmlFor="reason" className={label}>
                    Reason for contacting *
                  </label>
                  <select id="reason" className={field} value={form.reason} onChange={set("reason")}>
                    <option value="">Select…</option>
                    {contactReasons.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  {errors.reason && <p className={err}>{errors.reason}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="message" className={label}>
                  Message *
                </label>
                <textarea id="message" rows={6} className={field} value={form.message} onChange={set("message")} placeholder="Tell me about the opportunity or project…" />
                {errors.message && <p className={err}>{errors.message}</p>}
              </div>
              {status === "error" && (
                <p className="rounded-md border border-ember/40 bg-ink-3 px-4 py-3 text-sm text-muted-foreground">
                  The message could not be sent. Please email me directly at{" "}
                  <a href={`mailto:${person.email}`} className="text-ember underline">
                    {person.email}
                  </a>
                  .
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-full bg-ember px-6 py-3.5 text-sm font-medium text-[hsl(var(--ink))] transition-colors hover:bg-ember-deep hover:text-bone disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
