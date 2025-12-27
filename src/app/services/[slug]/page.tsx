import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getRelatedServices, servicesData } from '@/lib/data/services';
import { PageHero } from '@/components/ui/page-hero';
import { Sparkles, ArrowRight } from 'lucide-react';
import { AnimatedFinalCTA } from '@/components/services/animated-services-content';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/JsonLd';

// S-Tier Modules
import { VulgarisationBlock } from '@/components/services/modules/VulgarisationBlock';
import { MethodologySteps } from '@/components/services/modules/MethodologySteps';
import { BioFocus } from '@/components/services/modules/BioFocus';
import { ServiceTestimonials } from '@/components/services/modules/ServiceTestimonials';
import { ServiceFAQ } from '@/components/services/modules/ServiceFAQ';
import { LocalSeoBlock } from '@/components/services/modules/LocalSeoBlock';
import { AbstractServiceSchema } from '@/components/services/modules/AbstractServiceSchema';
import { RelatedContent } from '@/components/services/modules/RelatedContent';
import { ServiceNavigation } from '@/components/services/modules/ServiceNavigation';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service non trouvé',
    };
  }

  return {
    title: `${service.title} - Psychologue Biarritz`,
    description: service.shortDescription,
    alternates: {
      canonical: `https://www.audrey-castets.fr/services/${slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.shortDescription,
      url: `https://www.audrey-castets.fr/services/${slug}`,
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const related = getRelatedServices(service.relatedServices);

  return (
    <div className="min-h-screen bg-background pb-20">
      <BreadcrumbJsonLd items={[
        { name: 'Accueil', url: '/' },
        { name: 'Services', url: '/services' },
        { name: service.title }
      ]} />
      <ServiceJsonLd 
        name={service.title}
        description={service.shortDescription}
      />
      {/* 1. HERO SECTION (Glass & Light) */}
      <PageHero
        badge={{
          icon: <Sparkles className="w-4 h-4" />,
          text: service.category === 'particuliers' ? 'Accompagnement Particulier' : 'Accompagnement Professionnel'
        }}
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title }
        ]}
        align="center"
      />

      {/* 2. PROGRESS BAR & STICKY NAV */}
      <ServiceNavigation />

      <div className="container mx-auto px-6 lg:px-8 mt-12 md:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT SIDEBAR (Desktop Only for TOC placeholder if needed, mainly centered content though) 
              Actually StickyNav handles the TOC on the left column if layout permits, 
              but here we use a centralized layout with the StickyNav covering the left space if desired
              or we put content in col-span-12 and StickyNav is absolute/fixed. 
              The current ServiceNavigation component is fixed/sticky on left.
              Let's push content to the right a bit on large screens.
          */}
          <aside className="hidden lg:block lg:col-span-3 relative">
            {/* The Navigation component renders itself into this space if positioned relatively, 
                but our component uses 'fixed/sticky' classes internally. 
                Let's assume the component handles its position nicely.
            */}
          </aside>

          <div className="lg:col-span-8 lg:col-start-4">
            
            {/* 3. VULGARISATION MODULE */}
            <section id="comprendre" className="mb-20 scroll-mt-32">
              <VulgarisationBlock 
                title={service.vulgarisation.title} 
                description={service.vulgarisation.description} 
              />
            </section>

            {/* 4. VISUAL SCHEMA */}
            <section className="mb-20">
              <AbstractServiceSchema />
            </section>

            {/* 5. DEEP CONTENT & BENEFITS */}
            <section id="details" className="mb-20 scroll-mt-32 prose-premium">
              <h2 className="font-display text-3xl font-bold mb-6">Pourquoi choisir cet accompagnement ?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border shadow-sm">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-lg leading-relaxed text-muted-foreground space-y-6">
                <p>{service.fullDescription}</p>
                {/* Note: In a real CMS, this would be rich text. Here we use the fullDescription string. */}
              </div>
            </section>

            {/* 6. METHODOLOGY TIMELINE */}
            <section id="methodologie" className="mb-20 scroll-mt-32">
              <MethodologySteps steps={service.methodology} />
            </section>

            {/* 7. BIO FOCUS */}
            <section className="mb-20">
              <BioFocus text={service.bioFocus} />
            </section>

            {/* 8. TESTIMONIALS */}
            <section id="temoignages" className="mb-20 scroll-mt-32">
              <ServiceTestimonials testimonials={service.testimonials} />
            </section>

            {/* 9. FAQ */}
            <section id="faq" className="mb-20 scroll-mt-32">
              <ServiceFAQ faq={service.faq} serviceTitle={service.title} />
            </section>

            {/* 10. LOCAL SEO */}
            <section className="mb-20">
              <LocalSeoBlock />
            </section>

          </div>
        </div>
      </div>

      {/* 11. RELATED CONTENT (Full Width) */}
      <div className="container mx-auto px-6 lg:px-8">
         <RelatedContent 
            relatedServices={related} 
            relatedTests={service.relatedTests}
         />
      </div>

      {/* 12. CONTEXTUAL CTA */}
      <AnimatedFinalCTA 
         // Note: Expanding the component to accept props would be ideal, 
         // but for now we rely on the generic premium one which is already very strong.
         // If specific overrides are needed, we'd add props to AnimatedFinalCTA.
         // We can wrap it or customize it here.
         // For now, the generic one is "S-Tier" enough.
      />

    </div>
  );
}
