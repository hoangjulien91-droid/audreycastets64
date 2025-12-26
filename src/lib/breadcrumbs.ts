import type { BreadcrumbItem } from './data/types';

const routeLabels: Record<string, string> = {
  '': 'Accueil',
  'qui-suis-je': 'Qui suis-je',
  'mon-approche': 'Mon approche',
  'services': 'Services',
  'partenariat': 'Partenariat',
  'tarifs': 'Tarifs',
  'blog': 'Blog',
  'faq': 'FAQ',
  'contact': 'Contact',
  'ressources': 'Ressources',
  'mentions-legales': 'Mentions légales',
  'politique-confidentialite': 'Politique de confidentialité',
};

export function generateBreadcrumbs(pathname: string, customLabel?: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Accueil', href: '/' },
  ];

  let currentPath = '';
  
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === segments.length - 1;
    const label = isLast && customLabel 
      ? customLabel 
      : routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
    
    breadcrumbs.push({
      label,
      href: currentPath,
    });
  });

  return breadcrumbs;
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://www.audrey-castets.fr${item.href}`,
    })),
  };
}
