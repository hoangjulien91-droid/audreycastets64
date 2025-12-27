import { MBIQuestion } from "@/types/mbi";

export const MBI_QUESTIONS: MBIQuestion[] = [
  { id: 1, text: "Je me sens émotionnellement vidé(e) par mon travail", dimension: "SEP" },
  { id: 2, text: "Je me sens à bout à la fin de ma journée de travail", dimension: "SEP" },
  { id: 3, text: "Je me sens fatigué(e) lorsque je me lève le matin et que j'ai à affronter une autre journée de travail", dimension: "SEP" },
  { id: 4, text: "Je peux comprendre facilement ce que mes patients/clients/élèves ressentent", dimension: "SAP" },
  { id: 5, text: "Je sens que je m'occupe de certains patients/clients/élèves de façon impersonnelle, comme s'ils étaient des objets", dimension: "SD" },
  { id: 6, text: "Travailler avec des gens tout au long de la journée me demande beaucoup d'effort", dimension: "SEP" },
  { id: 7, text: "Je m'occupe très efficacement des problèmes de mes patients/clients/élèves", dimension: "SAP" },
  { id: 8, text: "Je sens que je craque à cause de mon travail", dimension: "SEP" },
  { id: 9, text: "J'ai l'impression, à travers mon travail, d'avoir une influence positive sur les gens", dimension: "SAP" },
  { id: 10, text: "Je suis devenu(e) plus insensible aux gens depuis que j'ai ce travail", dimension: "SD" },
  { id: 11, text: "Je crains que ce travail ne m'endurcisse émotionnellement", dimension: "SD" },
  { id: 12, text: "Je me sens plein(e) d'énergie", dimension: "SAP" },
  { id: 13, text: "Je me sens frustré(e) par mon travail", dimension: "SEP" },
  { id: 14, text: "Je sens que je travaille « trop dur » dans mon travail", dimension: "SEP" },
  { id: 15, text: "Je ne me soucie pas vraiment de ce qui arrive à certains de mes patients/clients/élèves", dimension: "SD" },
  { id: 16, text: "Travailler en contact direct avec les gens me stresse trop", dimension: "SEP" },
  { id: 17, text: "J'arrive facilement à créer une atmosphère détendue avec mes patients/clients/élèves", dimension: "SAP" },
  { id: 18, text: "Je me sens ragaillardi(e) lorsque dans mon travail j'ai été proche de patients/clients/élèves", dimension: "SAP" },
  { id: 19, text: "J'ai accompli beaucoup de choses qui en valent la peine dans ce travail", dimension: "SAP" },
  { id: 20, text: "Je me sens au bout du rouleau", dimension: "SEP" },
  { id: 21, text: "Dans mon travail, je traite les problèmes émotionnels très calmement", dimension: "SAP" },
  { id: 22, text: "J'ai l'impression que mes patients/clients/élèves me rendent responsable de certains de leurs problèmes", dimension: "SD" },
];

export const MBI_SCALE = [
  { value: 0, label: "Jamais" },
  { value: 1, label: "Quelques fois par an, au moins" },
  { value: 2, label: "Une fois par mois au moins" },
  { value: 3, label: "Quelques fois par mois" },
  { value: 4, label: "Une fois par semaine" },
  { value: 5, label: "Quelques fois par semaine" },
  { value: 6, label: "Chaque jour" },
];
