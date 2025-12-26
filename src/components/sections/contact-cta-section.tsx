'use client';

import { useState } from 'react';
import { Phone, Clock, MessageCircle, Send, Loader2, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, useReducedMotion } from 'framer-motion';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  service_type: z.string().optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const features = [
  {
    icon: Phone,
    title: "Premier entretien offert",
    description: "15 minutes pour faire connaissance",
    color: "bg-primary"
  },
  {
    icon: Clock,
    title: "Réponse sous 24h",
    description: "Je réponds rapidement à toutes vos demandes",
    color: "bg-violet"
  },
  {
    icon: MessageCircle,
    title: "Sans engagement",
    description: "Échangeons en toute liberté",
    color: "bg-rose"
  }
];

export default function ContactCtaSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const shouldReduceMotion = useReducedMotion();

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
        headers: { 'Content-Type': 'application/json' },
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
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Erreur de connexion. Veuillez vérifier votre connexion internet.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-spacing-lg bg-warm-rose/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="orb orb-primary w-[500px] h-[500px] top-0 left-0 opacity-15" />
        <div className="orb orb-violet w-[400px] h-[400px] bottom-0 right-0 opacity-10" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge-premium mb-5 inline-flex">
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>Contact</span>
            </div>
            <h2 className="text-foreground mb-5">
              Prêt(e) à franchir le <span className="text-primary">pas</span> ?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Je vous accompagne avec bienveillance et professionnalisme dans votre parcours. 
              N'hésitez pas à me contacter pour échanger sur vos besoins.
            </p>

            <div className="space-y-5">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="flex items-start gap-4 group"
                >
                  <motion.div 
                    className={`${feature.color} p-3 rounded-xl shadow-md flex-shrink-0`}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-5 h-5 text-white" aria-hidden="true" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="card-premium p-8 lg:p-10"
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Demande de Contact Rapide
            </h3>

            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-xl text-sm ${
                  submitStatus.type === 'success'
                    ? 'bg-sage/20 text-sage border border-sage/30'
                    : 'bg-destructive/10 text-destructive border border-destructive/20'
                }`}
                role="alert"
              >
                {submitStatus.message}
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nom complet <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Votre nom complet"
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
                {errors.name && (
                  <p className="mt-1.5 text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="votre@email.com"
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && (
                  <p className="mt-1.5 text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Téléphone <span className="text-muted-foreground">(optionnel)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone')}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="06 12 34 56 78"
                />
              </div>

              <div>
                <label htmlFor="service_type" className="block text-sm font-medium text-foreground mb-2">
                  Je suis
                </label>
                <select
                  id="service_type"
                  {...register('service_type')}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="particulier">Un particulier</option>
                  <option value="professionnel">Un professionnel</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="Décrivez brièvement votre besoin..."
                  aria-invalid={errors.message ? 'true' : 'false'}
                />
                {errors.message && (
                  <p className="mt-1.5 text-sm text-destructive">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full justify-center text-base disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" aria-hidden="true" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer ma demande
                    <Send className="w-5 h-5 ml-2" aria-hidden="true" />
                  </>
                )}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Vos informations sont confidentielles et ne seront jamais partagées.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
