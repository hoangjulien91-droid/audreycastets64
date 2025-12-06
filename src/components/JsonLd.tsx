import Script from 'next/script';

interface JsonLdProps {
  data: Record<string, any>;
}

export const JsonLd = ({ data }: JsonLdProps) => {
  return (
    <Script
      id={`json-ld-${data['@type']}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

// Organization Schema
export const OrganizationJsonLd = () => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Audrey Castets - Psychologue du Travail',
    alternateName: 'Audrey Castets Psychologue',
    url: 'https://www.audrey-castets.fr',
    logo: 'https://www.audrey-castets.fr/logo.png',
    image: 'https://www.audrey-castets.fr/og-image.jpg',
    description: 'Psychologue du Travail spécialisée en TCC et EFT. Accompagnement personnalisé pour particuliers et professionnels.',
    telephone: '+33743687297',
    email: 'contact@audrey-castets.fr',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
      addressLocality: 'France'
    },
    geo: {
      '@type': 'GeoCoordinates'
    },
    priceRange: '€€',
    sameAs: [],
    areaServed: {
      '@type': 'Country',
      name: 'France'
    },
    availableLanguage: ['fr'],
    serviceType: ['Psychologie du Travail', 'TCC', 'EFT', 'Thérapie Cognitivo-Comportementale'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '200',
      bestRating: '5',
      worstRating: '1'
    }
  };

  return <JsonLd data={data} />;
};

// LocalBusiness Schema
export const LocalBusinessJsonLd = () => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.audrey-castets.fr',
    name: 'Audrey Castets - Psychologue du Travail',
    description: 'Cabinet de psychologie du travail proposant des consultations en TCC et EFT pour particuliers et professionnels.',
    url: 'https://www.audrey-castets.fr',
    telephone: '+33743687297',
    email: 'contact@audrey-castets.fr',
    priceRange: '€€',
    image: 'https://www.audrey-castets.fr/og-image.jpg',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00'
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de psychologie',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Thérapie Cognitivo-Comportementale (TCC)',
            description: 'Accompagnement thérapeutique personnalisé en TCC'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'EFT - Emotional Freedom Techniques',
            description: 'Technique de libération émotionnelle pour le stress et anxiété'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Psychologie du Travail',
            description: 'Accompagnement professionnel et prévention RPS'
          }
        }
      ]
    }
  };

  return <JsonLd data={data} />;
};

// Person Schema
export const PersonJsonLd = () => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Audrey Castets',
    jobTitle: 'Psychologue du Travail',
    description: 'Psychologue du Travail spécialisée en TCC et EFT avec plus de 5 ans d\'expérience',
    url: 'https://www.audrey-castets.fr',
    image: 'https://www.audrey-castets.fr/audrey-castets.jpg',
    telephone: '+33743687297',
    email: 'contact@audrey-castets.fr',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Master 2 Psychologie du Travail'
    },
    knowsAbout: [
      'Psychologie du Travail',
      'Thérapie Cognitivo-Comportementale',
      'EFT',
      'Burn-out',
      'Gestion du stress',
      'Risques Psychosociaux'
    ],
    sameAs: []
  };

  return <JsonLd data={data} />;
};

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url?: string;
}

export const BreadcrumbJsonLd = ({ items }: { items: BreadcrumbItem[] }) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `https://www.audrey-castets.fr${item.url}` : undefined
    }))
  };

  return <JsonLd data={data} />;
};

// FAQ Schema
interface FaqItem {
  question: string;
  answer: string;
}

export const FaqJsonLd = ({ faqs }: { faqs: FaqItem[] }) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return <JsonLd data={data} />;
};

// Service Schema
interface ServiceData {
  name: string;
  description: string;
  price?: string;
}

export const ServiceJsonLd = ({ name, description, price }: ServiceData) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Person',
      name: 'Audrey Castets',
      jobTitle: 'Psychologue du Travail'
    },
    areaServed: {
      '@type': 'Country',
      name: 'France'
    },
    ...(price && {
      offers: {
        '@type': 'Offer',
        price,
        priceCurrency: 'EUR'
      }
    })
  };

  return <JsonLd data={data} />;
};

// Article Schema
interface ArticleData {
  title: string;
  description: string;
  datePublished: string;
  authors: string[];
}

export const ArticleJsonLd = ({ title, description, datePublished, authors }: ArticleData) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    author: authors.map(author => ({
      '@type': 'Person',
      name: author
    })),
    publisher: {
      '@type': 'Organization',
      name: 'Audrey Castets - Psychologue du Travail',
      url: 'https://www.audrey-castets.fr'
    }
  };

  return <JsonLd data={data} />;
};