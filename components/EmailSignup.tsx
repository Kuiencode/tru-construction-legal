"use client";

import { useState } from "react";
import SectionContainer from "@/components/ui/SectionContainer";

type Status = "idle" | "loading" | "success" | "error";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="waitlist" className="bg-slate-900 py-16 sm:py-24">
      <SectionContainer className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Be the first to know when we launch
        </h2>
        <p className="mx-auto mt-4 max-w-md text-slate-300">
          We&apos;ll only email you about launch — no spam, unsubscribe
          anytime.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="flex-1 rounded-full border border-slate-700 bg-slate-800 px-5 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-amber-500"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-amber-400 disabled:opacity-60"
          >
            {status === "loading" ? "Joining…" : "Join the Waitlist"}
          </button>
        </form>

        {message && (
          <p
            role="status"
            className={`mt-4 text-sm ${
              status === "success" ? "text-amber-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}
      </SectionContainer>
    </section>
  );
}
