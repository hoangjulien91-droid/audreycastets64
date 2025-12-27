
import { ServiceData } from "../types/service-types"; 
import { tcc } from "./definitions/services-particuliers/tcc";
import { eft } from "./definitions/services-particuliers/eft";
import { depression } from "./definitions/services-particuliers/depression";
import { confiance } from "./definitions/services-particuliers/confiance";
import { burnout } from "./definitions/services-particuliers/burnout";
import { stress } from "./definitions/services-particuliers/stress";
import { devPerso } from "./definitions/services-particuliers/dev-perso";
import { bilan } from "./definitions/services-particuliers/bilan";
import { reconversion } from "./definitions/services-particuliers/reconversion";

export const servicesParticuliers: ServiceData[] = [
  tcc,
  eft,
  depression,
  confiance,
  burnout,
  stress,
  devPerso,
  bilan,
  reconversion
];
