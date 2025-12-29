"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service_type: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue");
      }

      setIsSuccess(true);
      setFormData({ name: "", email: "", service_type: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSuccess) {
    return (
      <div className="rounded-3xl border border-[#D4C5D9]/30 bg-white p-8 shadow-2xl md:p-10">
        <div className="py-12 text-center">
          <div className="animate-pulse-soft mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-[var(--color-primary)] to-[#A594B3]">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-[var(--color-text-primary)]">
            Message envoyé avec succès !
          </h3>
          <p className="mb-6 text-[var(--color-text-secondary)]">
            Je vous répondrai dans les plus brefs délais, généralement sous 24h.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="font-medium text-[var(--color-primary)] hover:underline"
          >
            Envoyer un autre message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-[#D4C5D9]/30 bg-white p-8 shadow-2xl md:p-10">
      <h2
        className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Demande de Contact Rapide
      </h2>
      <p className="mb-8 text-[var(--color-text-secondary)]">
        Remplissez ce formulaire et je vous recontacterai rapidement
      </p>

      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-[var(--color-text-primary)]"
          >
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Jean Dupont"
            className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
          />
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-[var(--color-text-primary)]"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="jean.dupont@example.com"
            className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
          />
        </div>

        {/* Type Dropdown */}
        <div>
          <label
            htmlFor="service_type"
            className="mb-2 block text-sm font-semibold text-[var(--color-text-primary)]"
          >
            Je suis <span className="text-red-500">*</span>
          </label>
          <select
            id="service_type"
            name="service_type"
            value={formData.service_type}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
          >
            <option value="">Sélectionnez une option</option>
            <option value="particulier">Particulier</option>
            <option value="professionnel">Professionnel</option>
            <option value="entreprise">Entreprise</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        {/* Message Textarea */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-[var(--color-text-primary)]"
          >
            Votre message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Décrivez brièvement votre situation et vos besoins..."
            className="w-full resize-none rounded-xl border border-[#E5E7EB] px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-3 rounded-full bg-linear-to-r from-[var(--color-primary)] to-[#A594B3] px-8 py-4 font-semibold text-white shadow-xl transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              Envoyer ma demande
              <Send className="h-5 w-5" />
            </>
          )}
        </button>

        {/* Privacy Notice */}
        <p className="text-center text-xs text-[var(--color-text-secondary)]">
          Vos informations sont strictement confidentielles et ne seront jamais partagées.
        </p>
      </form>
    </div>
  );
}
