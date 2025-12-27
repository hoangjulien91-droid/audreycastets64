
import { ServiceData } from "../types/service-types";
import { servicesParticuliers } from './services-particuliers';
import { servicesProfessionnels } from './services-professionnels';

export * from "../types/service-types"; // Re-export types for backward compatibility if needed by other files importing from here

export const servicesData: ServiceData[] = [
  ...servicesParticuliers,
  ...servicesProfessionnels
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getRelatedServices(slugs: string[] = []): ServiceData[] {
  return servicesData.filter((service) => slugs.includes(service.slug));
}
