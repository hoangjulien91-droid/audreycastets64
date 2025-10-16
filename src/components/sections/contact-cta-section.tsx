'use client';

import { useState } from 'react';
import { Phone, Clock, MessageCircle, Send, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  service_type: z.string().optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactCtaSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Merci ! Votre message a été envoyé avec succès. Je vous répondrai dans les 24h.',
        });
        reset();
      } else {
        setSubmitStatus({
          type: 'error',
          message: responseData.error || 'Une erreur est survenue. Veuillez réessayer.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Erreur de connexion. Veuillez vérifier votre connexion internet.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
              Prêt(e) à franchir le pas ?
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-8">
              Je vous accompagne avec bienveillance et professionnalisme dans votre parcours. 
              N'hésitez pas à me contacter pour échanger sur vos besoins.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[var(--color-pink-light-bg)] p-3 rounded-2xl">
                  <Phone className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
                    Premier entretien offert
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    15 minutes pour faire connaissance
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[var(--color-pink-light-bg)] p-3 rounded-2xl">
                  <Clock className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
                    Réponse sous 24h
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    Je réponds rapidement à toutes vos demandes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[var(--color-pink-light-bg)] p-3 rounded-2xl">
                  <MessageCircle className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
                    Sans engagement
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    Échangeons en toute liberté
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-[var(--color-border)]">
            <h3 className="text-2xl font-bold mb-6 text-[var(--color-text-primary)]">
              Demande de Contact Rapide
            </h3>

            {submitStatus.type && (
              <div
                className={`mb-6 p-4 rounded-xl ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Nom complet <span className="text-[var(--color-primary)]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  className="w-full px-4 py-3 border border-[var(--color-input)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                  placeholder="Votre nom complet"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Email <span className="text-[var(--color-primary)]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className="w-full px-4 py-3 border border-[var(--color-input)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                  placeholder="votre@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Téléphone (optionnel)
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone')}
                  className="w-full px-4 py-3 border border-[var(--color-input)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                  placeholder="06 12 34 56 78"
                />
              </div>

              <div>
                <label htmlFor="service_type" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Je suis
                </label>
                <select
                  id="service_type"
                  {...register('service_type')}
                  className="w-full px-4 py-3 border border-[var(--color-input)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="particulier">Un particulier</option>
                  <option value="professionnel">Un professionnel</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Message <span className="text-[var(--color-primary)]">*</span>
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows={5}
                  className="w-full px-4 py-3 border border-[var(--color-input)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all resize-none"
                  placeholder="Décrivez brièvement votre besoin..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[var(--color-primary)] text-white py-4 px-6 rounded-full font-medium hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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

              <p className="text-xs text-[var(--color-text-secondary)] text-center">
                Vos informations sont confidentielles et ne seront jamais partagées.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}