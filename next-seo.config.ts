import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  defaultTitle: 'Audrey Castets - Psychologue du Travail | TCC & EFT',
  titleTemplate: '%s | Audrey Castets - Psychologue',
  description: 'Psychologue du Travail spécialisée en TCC et EFT. Accompagnement personnalisé pour particuliers et professionnels. Gestion du stress, burn-out, reconversion. Consultations en cabinet ou visio.',
  canonical: 'https://www.audrey-castets.fr',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.audrey-castets.fr',
    siteName: 'Audrey Castets - Psychologue du Travail',
    title: 'Audrey Castets - Psychologue du Travail | TCC & EFT',
    description: 'Psychologue du Travail spécialisée en TCC et EFT. Accompagnement personnalisé pour particuliers et professionnels. Gestion du stress, burn-out, reconversion.',
    images: [
      {
        url: 'https://www.audrey-castets.fr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Audrey Castets - Psychologue du Travail',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    handle: '@audreycastets',
    site: '@audreycastets',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=5',
    },
    {
      name: 'author',
      content: 'Audrey Castets',
    },
    {
      name: 'keywords',
      content: 'psychologue, psychologue du travail, TCC, EFT, thérapie cognitivo-comportementale, burn-out, stress, anxiété, reconversion professionnelle, risques psychosociaux, accompagnement professionnel',
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge',
    },
    {
      name: 'theme-color',
      content: '#8B7A98',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
  robotsProps: {
    nosnippet: false,
    notranslate: false,
    noimageindex: false,
    noarchive: false,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
};

export default config;
