"use client";

import { useState } from "react";
import { Phone, Clock, MessageCircle, Send, Loader2, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  service_type: z.string().optional(),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const features = [
  {
    icon: Phone,
    title: "Premier entretien offert",
    description: "15 minutes pour faire connaissance",
    bgColor: "#9D6B8C",
  },
  {
    icon: Clock,
    title: "Réponse sous 24h",
    description: "Je réponds rapidement à toutes vos demandes",
    bgColor: "#8B7CB3",
  },
  {
    icon: MessageCircle,
    title: "Sans engagement",
    description: "Échangeons en toute liberté",
    bgColor: "#C27B9E",
  },
];

export default function ContactCtaSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

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
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Merci ! Votre message a été envoyé avec succès. Je vous répondrai dans les 24h.",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: responseData.error || "Une erreur est survenue. Veuillez réessayer.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Erreur de connexion. Veuillez vérifier votre connexion internet.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-spacing-lg bg-warm-rose/30 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="orb orb-primary top-0 left-0 h-[500px] w-[500px] opacity-15" />
        <div className="orb orb-violet right-0 bottom-0 h-[400px] w-[400px] opacity-10" />
      </div>

      <div className="relative z-10 container">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-in slide-in-left">
            <div className="badge-premium mb-5 inline-flex">
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>Contact</span>
            </div>
            <h2 className="text-foreground mb-5">
              Prêt(e) à franchir le <span className="text-primary">pas</span> ?
            </h2>
            <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
              Je vous accompagne avec bienveillance et professionnalisme dans votre parcours.
              N'hésitez pas à me contacter pour échanger sur vos besoins.
            </p>

            <div className="space-y-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 animate-in slide-in-left"
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div
                    className="flex-shrink-0 rounded-xl p-3 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                    style={{ backgroundColor: feature.bgColor }}
                  >
                    <feature.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-1 font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="card-premium p-8 lg:p-10 animate-in slide-in-right delay-200"
          >
            <h3 className="text-foreground mb-6 text-xl font-semibold">
              Demande de Contact Rapide
            </h3>

            {submitStatus.type && (
              <div
                className={`mb-6 rounded-xl p-4 text-sm animate-in fade-in-up ${
                  submitStatus.type === "success"
                    ? "border"
                    : "bg-destructive/10 text-destructive border-destructive/20 border"
                }`}
                style={
                  submitStatus.type === "success"
                    ? {
                        backgroundColor: "rgba(143, 174, 155, 0.2)",
                        color: "#8FAE9B",
                        borderColor: "rgba(143, 174, 155, 0.3)",
                      }
                    : undefined
                }
                role="alert"
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-foreground mb-2 block text-sm font-medium">
                  Nom complet <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="bg-muted/50 border-border focus:ring-primary/50 focus:border-primary w-full rounded-xl border px-4 py-3 transition-all focus:ring-2 focus:outline-none"
                  placeholder="Votre nom complet"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="text-destructive mt-1.5 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="text-foreground mb-2 block text-sm font-medium">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="bg-muted/50 border-border focus:ring-primary/50 focus:border-primary w-full rounded-xl border px-4 py-3 transition-all focus:ring-2 focus:outline-none"
                  placeholder="votre@email.com"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="text-destructive mt-1.5 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="text-foreground mb-2 block text-sm font-medium">
                  Téléphone <span className="text-muted-foreground">(optionnel)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  className="bg-muted/50 border-border focus:ring-primary/50 focus:border-primary w-full rounded-xl border px-4 py-3 transition-all focus:ring-2 focus:outline-none"
                  placeholder="06 12 34 56 78"
                />
              </div>

              <div>
                <label
                  htmlFor="service_type"
                  className="text-foreground mb-2 block text-sm font-medium"
                >
                  Je suis
                </label>
                <select
                  id="service_type"
                  {...register("service_type")}
                  className="bg-muted/50 border-border focus:ring-primary/50 focus:border-primary w-full rounded-xl border px-4 py-3 transition-all focus:ring-2 focus:outline-none"
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="particulier">Un particulier</option>
                  <option value="professionnel">Un professionnel</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="text-foreground mb-2 block text-sm font-medium">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  className="bg-muted/50 border-border focus:ring-primary/50 focus:border-primary w-full resize-none rounded-xl border px-4 py-3 transition-all focus:ring-2 focus:outline-none"
                  placeholder="Décrivez brièvement votre besoin..."
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && (
                  <p className="text-destructive mt-1.5 text-sm">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary inline-flex w-full items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer ma demande
                    <Send className="ml-2 h-5 w-5" aria-hidden="true" />
                  </>
                )}
              </button>

              <p className="text-muted-foreground text-center text-xs">
                Vos informations sont confidentielles et ne seront jamais partagées.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
