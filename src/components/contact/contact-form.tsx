"use client";

import { useState } from 'react';
import { Send, Loader2, CheckCircle } from 'lucide-react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service_type: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue');
      }

      setIsSuccess(true);
      setFormData({ name: '', email: '', service_type: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-[#D4C5D9]/30">
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-linear-to-br from-[var(--color-primary)] to-[#A594B3] rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-soft">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
            Message envoyé avec succès !
          </h3>
          <p className="text-[var(--color-text-secondary)] mb-6">
            Je vous répondrai dans les plus brefs délais, généralement sous 24h.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="text-[var(--color-primary)] hover:underline font-medium"
          >
            Envoyer un autre message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-[#D4C5D9]/30">
      <h2 className="text-3xl font-bold mb-2 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
        Demande de Contact Rapide
      </h2>
      <p className="text-[var(--color-text-secondary)] mb-8">
        Remplissez ce formulaire et je vous recontacterai rapidement
      </p>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
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
            className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
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
            className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
          />
        </div>

        {/* Type Dropdown */}
        <div>
          <label htmlFor="service_type" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
            Je suis <span className="text-red-500">*</span>
          </label>
          <select
            id="service_type"
            name="service_type"
            value={formData.service_type}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all bg-white"
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
          <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
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
            className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-linear-to-r from-[var(--color-primary)] to-[#A594B3] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              Envoyer ma demande
              <Send className="w-5 h-5" />
            </>
          )}
        </button>

        {/* Privacy Notice */}
        <p className="text-xs text-[var(--color-text-secondary)] text-center">
          Vos informations sont strictement confidentielles et ne seront jamais partagées.
        </p>
      </form>
    </div>
  );
}
