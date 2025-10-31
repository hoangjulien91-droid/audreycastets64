import { NextSeo, NextSeoProps } from 'next-seo';
import { usePathname } from 'next/navigation';

interface SeoProps extends NextSeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  image?: string;
}

export const Seo = ({
  title,
  description,
  canonical,
  noindex = false,
  nofollow = false,
  image,
  ...rest
}: SeoProps) => {
  const pathname = usePathname();
  const baseUrl = 'https://www.audrey-castets.fr';
  
  // Générer automatiquement l'URL canonical basée sur le pathname
  const canonicalUrl = canonical || `${baseUrl}${pathname}`;
  
  // Image par défaut si non spécifiée
  const ogImage = image || `${baseUrl}/og-image.jpg`;

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonicalUrl}
      noindex={noindex}
      nofollow={nofollow}
      openGraph={{
        url: canonicalUrl,
        title: title,
        description: description,
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: title || 'Audrey Castets - Psychologue du Travail',
            type: 'image/jpeg',
          },
        ],
        siteName: 'Audrey Castets - Psychologue du Travail',
        type: 'website',
        locale: 'fr_FR',
      }}
      twitter={{
        handle: '@audreycastets',
        site: '@audreycastets',
        cardType: 'summary_large_image',
      }}
      {...rest}
    />
  );
};
