import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Audrey Castets - Psychologue du Travail",
    short_name: "Audrey Castets",
    description:
      "Cabinet de Psychologie du Travail, Bilans de compétences CPF, TCC et EFT à Anglet et Ondres.",
    start_url: "/",
    display: "standalone",
    background_color: "#FDF8F6",
    theme_color: "#9D6B8C",
    icons: [
      {
        src: "/icon",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    shortcuts: [
      {
        name: "Prendre Rendez-vous",
        url: "/prendre-rendez-vous",
        description: "Réserver un créneau de consultation ou d'échange de 15 min offert",
      },
      {
        name: "Bilan de Compétences (CPF)",
        url: "/bilan-de-competences",
        description: "Découvrir le parcours bilan de compétences finançable CPF",
      },
      {
        name: "Test Burnout (MBI)",
        url: "/tests/burnout",
        description: "Évaluer son niveau d'épuisement professionnel gratuitement",
      },
    ],
  };
}
