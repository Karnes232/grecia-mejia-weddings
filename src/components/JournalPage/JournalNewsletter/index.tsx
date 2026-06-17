"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import type { JournalPage } from "@/sanity/queries/journal";

type JournalNewsletterProps = {
  newsletter?: JournalPage["newsletter"];
};

type Status = "idle" | "submitting" | "success" | "error";

export function JournalNewsletter({ newsletter }: JournalNewsletterProps) {
  const t = useTranslations("journalPage");
  const [status, setStatus] = useState<Status>("idle");

  if (!newsletter?.headline) return null;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
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

  return (
    <section className="bg-olive px-6 py-[120px] text-center text-ivory md:px-14">
      {newsletter.script ? (
        <span className="mb-3.5 block font-script text-[48px] leading-none text-gold-soft">
          {newsletter.script}
        </span>
      ) : null}
      <h2 className="m-0 mb-6 font-serif text-[clamp(44px,6vw,72px)] font-light leading-none text-ivory">
        {renderHeadline(newsletter.headline, "gold")}
      </h2>
      {newsletter.body ? (
        <p className="mx-auto mb-10 max-w-[46ch] font-serif text-[20px] italic leading-[1.5] text-[#d4cdb8]">
          {newsletter.body}
        </p>
      ) : null}

      {status === "success" ? (
        <p className="font-serif text-[20px] italic text-gold-soft">
          {newsletter.script ? "—" : null} {t("subscribe")} ✓
        </p>
      ) : (
        <form
          name="newsletter"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-[520px] gap-0 border-b border-[rgba(212,186,140,0.5)]"
        >
          <input type="hidden" name="form-name" value="newsletter" />
          <p className="hidden">
            <label>
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>
          <input
            type="email"
            name="email"
            required
            aria-label={t("emailLabel")}
            placeholder={t("emailPlaceholder")}
            className="flex-1 border-0 bg-transparent px-1 py-4 font-serif text-[18px] italic text-ivory outline-none placeholder:italic placeholder:text-[#a8a293]"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="cursor-pointer border-0 bg-transparent px-2 font-sans text-[10px] uppercase tracking-wide-eyebrow text-gold-soft disabled:opacity-60"
          >
            {t("subscribe")} →
          </button>
        </form>
      )}
    </section>
  );
}
