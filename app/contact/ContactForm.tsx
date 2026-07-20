"use client";

import { FormEvent, useState } from "react";
import { SITE } from "@/lib/site";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitState("success");
      setMessage("Thank you. We received your message and will contact you shortly.");
      form.reset();
    } catch {
      setSubmitState("error");
      setMessage(`Unable to send your message right now. Please call ${SITE.phoneDisplay}.`);
    }
  }

  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <h2>Send a Message</h2>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" required autoComplete="name" />
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required autoComplete="email" />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows={5} required />
      <button className="btn btn-primary" type="submit" disabled={submitState === "submitting"}>
        {submitState === "submitting" ? "Sending..." : "Send Message"}
      </button>
      {message ? <p aria-live="polite">{message}</p> : null}
    </form>
  );
}
