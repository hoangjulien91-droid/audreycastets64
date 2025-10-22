'use client';

import { useState } from 'react';
import { Phone, Clock, MessageCircle, Send, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';

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
    gradient: "from-primary to-primary-soft"
  },
  {
    icon: Clock,
    title: "Réponse sous 24h",
    description: "Je réponds rapidement à toutes vos demandes",
    gradient: "from-accent-teal to-accent-teal-light"
  },
  {
    icon: MessageCircle,
    title: "Sans engagement",
    description: "Échangeons en toute liberté",
    gradient: "from-primary-soft to-primary-light"
  }
];

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
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-warm-beige relative overflow-hidden">
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-accent-teal/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-display">
              Prêt(e) à franchir le <span className="gradient-text">pas</span> ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Je vous accompagne avec bienveillance et professionnalisme dans votre parcours. 
              N'hésitez pas à me contacter pour échanger sur vos besoins.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="flex items-start gap-4 group"
                >
                  <motion.div 
                    className={`bg-gradient-to-br ${feature.gradient} p-3 rounded-2xl shadow-md`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            className="bg-white rounded-3xl shadow-xl p-8 border border-primary/10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Demande de Contact Rapide
            </h3>

            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-xl ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {submitStatus.message}
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {[
                { id: 'name', label: 'Nom complet', type: 'text', placeholder: 'Votre nom complet', required: true },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'votre@email.com', required: true },
                { id: 'phone', label: 'Téléphone (optionnel)', type: 'tel', placeholder: '06 12 34 56 78', required: false }
              ].map((field, index) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <label htmlFor={field.id} className="block text-sm font-medium text-foreground mb-2">
                    {field.label} {field.required && <span className="text-primary">*</span>}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    {...register(field.id as keyof ContactFormData)}
                    className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder={field.placeholder}
                  />
                  {errors[field.id as keyof ContactFormData] && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors[field.id as keyof ContactFormData]?.message}
                    </p>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <label htmlFor="service_type" className="block text-sm font-medium text-foreground mb-2">
                  Je suis
                </label>
                <select
                  id="service_type"
                  {...register('service_type')}
                  className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="particulier">Un particulier</option>
                  <option value="professionnel">Un professionnel</option>
                  <option value="autre">Autre</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows={5}
                  className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Décrivez brièvement votre besoin..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full gradient-primary text-white py-4 px-6 rounded-full font-medium shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
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
              </motion.button>

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