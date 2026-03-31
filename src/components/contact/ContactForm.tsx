"use client";

import { useState } from "react";
import { siteConfig as defaultConfig } from "@/config/site";
import type { SiteConfig } from "@/types";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import FileUpload from "@/components/ui/FileUpload";
import Button from "@/components/ui/Button";

export default function ContactForm({ config }: { config?: SiteConfig }) {
  const { contact } = config || defaultConfig;
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(contact.formAction, {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          style: formData.get("style"),
          message: formData.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-8 text-center">
        <h3 className="font-heading text-xl font-bold text-accent mb-2">
          Message Sent
        </h3>
        <p className="text-text-muted">
          We&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input label="Name" name="name" placeholder="Your name" required />
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="you@example.com"
        required
      />

      <div className="space-y-2">
        <label
          htmlFor="style"
          className="block text-sm font-medium text-text-muted"
        >
          Preferred Style
        </label>
        <div className="relative">
          <select
            id="style"
            name="style"
            className="w-full appearance-none rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-3 pr-10 text-text focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-colors duration-200 [&>option]:bg-[#1a1a1a] [&>option]:text-text"
          >
            <option value="">Select a style</option>
            {contact.styles.map((style) => (
              <option key={style} value={style}>
                {style}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg className="w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <Textarea
        label="Describe Your Tattoo Idea"
        name="message"
        placeholder="Tell us about the design, placement, size..."
        rows={5}
        required
      />

      <FileUpload label="Reference Image (optional)" />

      <Button type="submit" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>

      {status === "error" && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
