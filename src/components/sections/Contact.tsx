"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2, Rocket } from "lucide-react";
import contactConfig from "@/config/contact";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import GlowOrb from "@/components/GlowOrb";

const details = contactConfig.details;
const socials = contactConfig.socials;

type FormState = {
  name: string;
  company: string;
  email: string;
  project: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  company: "",
  email: "",
  project: "",
};

function validateForm(form: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!form.name.trim()) {
    errors.name = "Please enter your full name.";
  } else if (form.name.trim().length < 2) {
    errors.name = "Name should be at least 2 characters.";
  }

  if (!form.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.project.trim()) {
    errors.project = "Please tell us a little about your project.";
  } else if (form.project.trim().length < 10) {
    errors.project = "Please add a few more details about your project.";
  }

  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const hasErrors = Object.keys(errors).length > 0;

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));

    if (errors[field]) {
      setErrors((current) => {
        const nextErrors = { ...current };
        delete nextErrors[field];
        return nextErrors;
      });
    }

    if (submitMessage) {
      setSubmitMessage("");
      setSent(false);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nextErrors = validateForm(form);
    setErrors(nextErrors);
    setSubmitMessage("");
    setSent(false);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setSubmitMessage(
          result.message || "Unable to send your message right now. Please try again."
        );
        return;
      }

      setSent(true);
      setSubmitMessage(
        result.message ||
          "Thanks for contacting Iconixcode. We received your message and will reach you soon."
      );
      setForm(initialForm);

      setTimeout(() => {
        setSent(false);
        setSubmitMessage("");
      }, 7000);
    } catch {
      setSubmitMessage("Something went wrong. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <GlowOrb
          size={360}
          color="rgba(30, 205, 253, 0.08)"
          className="left-[-12%] top-[10%]"
        />
        <GlowOrb
          size={420}
          color="rgba(0, 33, 148, 0.24)"
          className="right-[-14%] bottom-[4%]"
        />
      </div>

      <div className="container-x section-pad relative z-10">
        <SectionHeader
          badge="Contact Us"
          title={
            <>
              Let&apos;s Build Something{" "}
              <span className="text-gradient-cyan">Great</span>
            </>
          }
          subtitle="Have a project in mind? Tell us about it. We respond as soon as possible."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_1.35fr]">
          <div className="flex flex-col gap-4">
            {details.map((detail, index) => (
              <Reveal key={detail.label} delay={index * 0.08}>
                <a
                  href={detail.href}
                  target={detail.external ? "_blank" : undefined}
                  rel={detail.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#020d2a]/70 p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/[0.04]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/[0.08] text-cyan-400 transition-shadow duration-300 group-hover:shadow-[0_0_16px_rgba(30,205,253,0.28)]">
                    <detail.icon size={19} />
                  </div>

                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-silver-500">
                      {detail.label}
                    </div>
                    <div className="mt-0.5 break-words text-sm font-medium text-white">
                      {detail.value}
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}

            <Reveal delay={0.28}>
              <div className="flex flex-1 flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#020d2a]/70 p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/[0.08] text-cyan-400">
                  <Rocket size={20} />
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-white">
                    Ready to start?
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-silver-400">
                    Whether you have a detailed brief or just a rough concept, we can help
                    turn your idea into a reliable digital product.
                  </p>
                </div>

                <div className="mt-5 flex gap-2.5">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href === "#" ? undefined : "_blank"}
                      rel={social.href === "#" ? undefined : "noopener noreferrer"}
                      aria-label={social.label}
                      className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-silver-400 transition-all hover:border-cyan-400/40 hover:text-cyan-300"
                    >
                      <social.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#020d2a]/70 p-5 sm:p-6 md:p-7"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  label="FULL NAME"
                  type="text"
                  value={form.name}
                  error={errors.name}
                  onChange={(value) => updateField("name", value)}
                  placeholder="Your name"
                  required
                />

                <FormField
                  label="COMPANY"
                  type="text"
                  value={form.company}
                  error={errors.company}
                  onChange={(value) => updateField("company", value)}
                  placeholder="Company name"
                />
              </div>

              <FormField
                label="EMAIL"
                type="email"
                value={form.email}
                error={errors.email}
                onChange={(value) => updateField("email", value)}
                placeholder="you@example.com"
                required
              />

              <div className="flex flex-1 flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-silver-400">
                  TELL US ABOUT YOUR PROJECT <span className="text-cyan-300">*</span>
                </label>

                <textarea
                  value={form.project}
                  onChange={(e) => updateField("project", e.target.value)}
                  placeholder="Describe what you want to build, your goals, timeline, and any important details..."
                  required
                  rows={8}
                  aria-invalid={Boolean(errors.project)}
                  className={`min-h-[200px] resize-y rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-silver-600 transition-all duration-300 focus:bg-cyan-500/[0.04] focus:outline-none focus:ring-2 ${
                    errors.project
                      ? "border-red-400/50 focus:border-red-400/60 focus:ring-red-400/15"
                      : "border-white/10 focus:border-cyan-400/40 focus:ring-cyan-400/15"
                  }`}
                />

                {errors.project && (
                  <p className="text-xs text-red-300">{errors.project}</p>
                )}
              </div>

              {hasErrors && (
                <div className="rounded-xl border border-red-400/20 bg-red-500/[0.06] px-4 py-3 text-xs leading-relaxed text-red-200">
                  Please fix the highlighted fields before sending your message.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full overflow-hidden rounded-xl border border-cyan-300/35 bg-[linear-gradient(135deg,rgba(30,205,253,0.95),rgba(0,33,148,0.74))] py-3.5 text-sm font-bold text-white shadow-[0_14px_34px_rgba(0,33,148,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200/60 hover:brightness-110 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-65 disabled:hover:translate-y-0 disabled:hover:brightness-100"
              >
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.34),transparent_28%)] opacity-70" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative z-10 inline-flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 size={17} className="animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </span>
              </button>

              <AnimatePresence mode="wait">
                {submitMessage && (
                  <motion.div
                    key={sent ? "success" : "error"}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className={`flex items-start gap-2 rounded-xl border px-4 py-3 text-sm leading-relaxed ${
                      sent
                        ? "border-cyan-400/20 bg-cyan-500/[0.06] text-cyan-100"
                        : "border-red-400/20 bg-red-500/[0.06] text-red-200"
                    }`}
                  >
                    {sent && (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    )}
                    <span>{submitMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  type,
  value,
  onChange,
  placeholder,
  error,
  required,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-silver-400">
        {label} {required && <span className="text-cyan-300">*</span>}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        aria-invalid={Boolean(error)}
        className={`rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-silver-600 transition-all duration-300 focus:bg-cyan-500/[0.04] focus:outline-none focus:ring-2 ${
          error
            ? "border-red-400/50 focus:border-red-400/60 focus:ring-red-400/15"
            : "border-white/10 focus:border-cyan-400/40 focus:ring-cyan-400/15"
        }`}
      />

      {error && <p className="text-xs text-red-300">{error}</p>}
    </div>
  );
}