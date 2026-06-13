"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import type { ContactPage } from "@/sanity/queries/contact";

type ContactFormProps = {
  form?: ContactPage["form"];
};

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Canonical option values. The `value` (submitted to Netlify) is a stable
 * English string so dashboard data stays consistent across locales; the
 * visible label is translated via `messages/{locale}.json`.
 */
const DESTINATION_OPTIONS = [
  ["puntaCana", "Punta Cana & the Caribbean"],
  ["italy", "Italy"],
  ["france", "France"],
  ["spain", "Spain"],
  ["greece", "Greece"],
  ["unitedStates", "United States"],
  ["undecided", "Undecided — guide us"],
] as const;

const TRADITION_OPTIONS = [
  ["indian", "Indian"],
  ["jewish", "Jewish"],
  ["arab", "Arab"],
  ["southAsian", "South Asian"],
  ["christian", "Christian / Catholic"],
  ["interfaith", "Interfaith"],
  ["latin", "Latin"],
  ["civil", "Civil / Non-religious"],
  ["other", "Other / Multiple"],
] as const;

const GUEST_OPTIONS = [
  ["under40", "Under 40"],
  ["from40to100", "40 – 100"],
  ["from100to200", "100 – 200"],
  ["from200to400", "200 – 400"],
  ["from400to600", "400 – 600"],
  ["over600", "600+"],
] as const;

const BUDGET_OPTIONS = [
  ["from100to250", "USD $100,000 – $250,000"],
  ["from250to500", "USD $250,000 – $500,000"],
  ["from500to1m", "USD $500,000 – $1M"],
  ["over1m", "USD $1M+"],
  ["discuss", "Prefer to discuss"],
] as const;

const FIELD_CLASS =
  "w-full rounded-none border-0 border-b border-rule bg-transparent py-2.5 font-serif text-xl italic text-ink outline-none transition-colors placeholder:italic placeholder:text-[#bdb49e] focus:border-olive";

const SELECT_CLASS = `${FIELD_CLASS} cursor-pointer appearance-none pr-6`;

const LABEL_CLASS =
  "mb-2.5 block text-[10px] uppercase tracking-[0.3em] text-muted";

const SELECT_STYLE = {
  backgroundImage:
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' fill='none' stroke='%23b89968' stroke-width='1.2'/></svg>\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 4px center",
} as const;

export function ContactForm({ form }: ContactFormProps) {
  const t = useTranslations("contactPage.form");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);

    // Honeypot — silently succeed for bots without submitting.
    if (formData.get("bot-field")) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const params = new URLSearchParams();
      formData.forEach((value, key) => {
        params.append(key, typeof value === "string" ? value : "");
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (!response.ok) throw new Error(`Submit failed: ${response.status}`);
      formEl.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const requiredMark = (
    <span className="ml-1 text-gold" aria-hidden>
      *
    </span>
  );

  if (status === "success") {
    return (
      <div className="border border-gold bg-cream px-7 py-6 font-serif text-lg italic text-olive">
        {form?.successMessage ?? "Thank you — your enquiry is with the studio."}
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don’t fill this out if you’re human:{" "}
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      {/* About you */}
      <fieldset className="mb-12 border-0 p-0">
        {form?.legendAboutYou ? (
          <legend className="mb-6 w-full border-b border-rule pb-[18px] font-serif text-sm italic tracking-[0.02em] text-gold">
            {form.legendAboutYou}
          </legend>
        ) : null}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="mb-8">
            <label htmlFor="full-name" className={LABEL_CLASS}>
              {t("fields.fullName.label")}
              {requiredMark}
            </label>
            <input
              id="full-name"
              name="full-name"
              type="text"
              required
              placeholder={t("fields.fullName.placeholder")}
              className={FIELD_CLASS}
            />
          </div>
          <div className="mb-8">
            <label htmlFor="country" className={LABEL_CLASS}>
              {t("fields.country.label")}
            </label>
            <input
              id="country"
              name="country"
              type="text"
              placeholder={t("fields.country.placeholder")}
              className={FIELD_CLASS}
            />
          </div>
          <div className="mb-8">
            <label htmlFor="email" className={LABEL_CLASS}>
              {t("fields.email.label")}
              {requiredMark}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder={t("fields.email.placeholder")}
              className={FIELD_CLASS}
            />
          </div>
          <div className="mb-8">
            <label htmlFor="whatsapp" className={LABEL_CLASS}>
              {t("fields.whatsapp.label")}
              {requiredMark}
            </label>
            <input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              required
              placeholder={t("fields.whatsapp.placeholder")}
              className={FIELD_CLASS}
            />
          </div>
        </div>
      </fieldset>

      {/* About the wedding */}
      <fieldset className="mb-12 border-0 p-0">
        {form?.legendAboutWedding ? (
          <legend className="mb-6 w-full border-b border-rule pb-[18px] font-serif text-sm italic tracking-[0.02em] text-gold">
            {form.legendAboutWedding}
          </legend>
        ) : null}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="mb-8">
            <label htmlFor="destination" className={LABEL_CLASS}>
              {t("selects.destination.label")}
            </label>
            <select
              id="destination"
              name="destination"
              defaultValue=""
              className={SELECT_CLASS}
              style={SELECT_STYLE}
            >
              <option value="" disabled>
                {t("selects.destination.placeholder")}
              </option>
              {DESTINATION_OPTIONS.map(([key, value]) => (
                <option key={key} value={value}>
                  {t(`selects.destination.options.${key}`)}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-8">
            <label htmlFor="tradition" className={LABEL_CLASS}>
              {t("selects.tradition.label")}
            </label>
            <select
              id="tradition"
              name="tradition"
              defaultValue=""
              className={SELECT_CLASS}
              style={SELECT_STYLE}
            >
              <option value="" disabled>
                {t("selects.tradition.placeholder")}
              </option>
              {TRADITION_OPTIONS.map(([key, value]) => (
                <option key={key} value={value}>
                  {t(`selects.tradition.options.${key}`)}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-8">
            <label htmlFor="date" className={LABEL_CLASS}>
              {t("fields.date.label")}
            </label>
            <input
              id="date"
              name="date"
              type="text"
              placeholder={t("fields.date.placeholder")}
              className={FIELD_CLASS}
            />
          </div>
          <div className="mb-8">
            <label htmlFor="guests" className={LABEL_CLASS}>
              {t("selects.guests.label")}
            </label>
            <select
              id="guests"
              name="guests"
              defaultValue=""
              className={SELECT_CLASS}
              style={SELECT_STYLE}
            >
              <option value="" disabled>
                {t("selects.guests.placeholder")}
              </option>
              {GUEST_OPTIONS.map(([key, value]) => (
                <option key={key} value={value}>
                  {t(`selects.guests.options.${key}`)}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="mb-8">
            <label htmlFor="budget" className={LABEL_CLASS}>
              {t("selects.budget.label")}
            </label>
            <select
              id="budget"
              name="budget"
              defaultValue=""
              className={SELECT_CLASS}
              style={SELECT_STYLE}
            >
              <option value="" disabled>
                {t("selects.budget.placeholder")}
              </option>
              {BUDGET_OPTIONS.map(([key, value]) => (
                <option key={key} value={value}>
                  {t(`selects.budget.options.${key}`)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </fieldset>

      {/* In your words */}
      <fieldset className="mb-12 border-0 p-0">
        {form?.legendInYourWords ? (
          <legend className="mb-6 w-full border-b border-rule pb-[18px] font-serif text-sm italic tracking-[0.02em] text-gold">
            {form.legendInYourWords}
          </legend>
        ) : null}
        <div className="grid grid-cols-1">
          <div className="mb-8">
            <label htmlFor="message" className={LABEL_CLASS}>
              {t("message.label")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder={t("message.placeholder")}
              className={`${FIELD_CLASS} min-h-[90px] resize-y leading-[1.5]`}
            />
          </div>
        </div>
      </fieldset>

      <div className="mt-2 flex flex-wrap items-center gap-8">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="border border-olive bg-olive px-11 py-[18px] font-sans text-[11px] uppercase tracking-[0.32em] text-ivory transition-colors hover:border-olive-dk hover:bg-olive-dk disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? t("submitting") : form?.submitLabel}
        </button>
        {form?.submitNote ? (
          <span className="max-w-[30ch] text-xs leading-[1.6] text-muted">
            {form.submitNote}
          </span>
        ) : null}
      </div>

      {status === "error" ? (
        <p
          role="alert"
          className="mt-6 border border-[#c4a08a] bg-cream px-7 py-6 font-serif text-lg italic text-[#9a3b2f]"
        >
          {t("errorMessage")}
        </p>
      ) : null}
    </form>
  );
}
