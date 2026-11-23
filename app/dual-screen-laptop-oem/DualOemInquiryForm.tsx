"use client";

import { FormEvent, useState } from "react";

const requestTypes = [
  "Request Specifications",
  "Request Quality Documents",
  "Request Sample Terms",
  "Request a Quote",
];

export default function DualOemInquiryForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [reference, setReference] = useState("");
  const [message, setMessage] = useState("");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("website") ?? "")) return;
    setState("sending");
    setMessage("Submitting your request…");
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name") ?? "",
          company: data.get("company") ?? "",
          email: data.get("email") ?? "",
          product: `${data.get("product") ?? ""} · ${data.get("requestType") ?? ""}`,
          quantity: data.get("quantity") ?? "",
          requirements: `Request type: ${data.get("requestType") ?? ""}\nTarget market: ${data.get("market") ?? ""}\n\n${data.get("requirements") ?? ""}`,
          pagePath: window.location.pathname,
          website: data.get("website") ?? "",
        }),
      });
      const result = (await response.json()) as { ok?: boolean; reference?: string; error?: string };
      if (!response.ok || !result.ok) throw new Error(result.error || "Submission failed.");
      setReference(result.reference ?? "");
      setState("sent");
      setMessage("Your request has been received. Our team will contact you by business email.");
      form.reset();
    } catch {
      setState("error");
      setMessage("We could not submit your request. Please try again or contact us by email.");
    }
  };

  return (
    <form className="dualOemFormBox" onSubmit={submit}>
      <label>Business Email *<input name="email" type="email" required autoComplete="email" /></label>
      <label>Name *<input name="name" type="text" required autoComplete="name" /></label>
      <label>Company<input name="company" type="text" autoComplete="organization" /></label>
      <label>Request type *
        <select name="requestType" required defaultValue={requestTypes[0]}>
          {requestTypes.map((type) => <option key={type} value={type}>{type}</option>)}
        </select>
      </label>
      <label>Product / Model *
        <select name="product" required defaultValue="FD16">
          <option value="FD16">FD16 · Dual 16-inch touch</option>
          <option value="DS16">DS16 · 16-inch + 14-inch</option>
          <option value="Not sure">Not sure yet</option>
        </select>
      </label>
      <label>Target Market<input name="market" type="text" placeholder="Country / region" /></label>
      <label>Estimated Quantity<input name="quantity" type="text" placeholder="Samples / bulk" /></label>
      <label className="dualOemFull">Project Requirements *<textarea name="requirements" required rows={4} /></label>
      <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="dualOemHoneypot" />
      <button type="submit" disabled={state === "sending"}>Submit request</button>
      {message ? <p role="status" className="dualOemStatus">{message}{state === "sent" && reference ? ` Reference: ${reference}` : ""}</p> : null}
    </form>
  );
}
