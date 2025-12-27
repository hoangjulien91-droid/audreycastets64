"use client";

import { ServiceData } from "@/lib/data/services";
import { Link } from 'next-view-transitions';
import { ArrowRight, FileText, CheckCircle, Brain } from "lucide-react";

interface RelatedContentProps {
  relatedServices: ServiceData[];
  relatedTests?: ('mbi' | 'diva')[];
}

export function RelatedContent({ relatedServices, relatedTests }: RelatedContentProps) {
  return (
    <div className="py-12 border-t border-border mt-12">
      <h3 className="text-xl font-bold font-display mb-8">
        Pour aller <span className="text-primary">plus loin</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* TESTS DIAGNOSTICS */}
        {relatedTests?.includes('mbi') && (
           <Link href="/tests/burnout" className="group card-premium p-6 bg-linear-to-br from-orange-50 to-white hover:border-orange-200 transition-colors">
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-orange-100 rounded-xl text-orange-600">
                    <FileText className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">Test Burn-out (MBI)</h4>
                    <p className="text-sm text-muted-foreground mb-3">Évaluez votre niveau d'épuisement professionnel.</p>
                    <span className="text-xs font-semibold text-orange-600 flex items-center">
                        Passer le test <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                 </div>
              </div>
           </Link>
        )}
        
        {relatedTests?.includes('diva') && (
           <Link href="/tests/tdah" className="group card-premium p-6 bg-linear-to-br from-blue-50 to-white hover:border-blue-200 transition-colors">
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                    <Brain className="w-6 h-6" /> {/* Requires Brain import, handled below */}
                 </div>
                 <div>
                    <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">Test TDAH (DIVA)</h4>
                    <p className="text-sm text-muted-foreground mb-3">Bilan complet TDAH Adulte.</p>
                    <span className="text-xs font-semibold text-blue-600 flex items-center">
                        Passer le test <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                 </div>
              </div>
           </Link>
        )}

        {/* RELATED SERVICES */}
        {relatedServices.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`} className="group card-premium p-6 hover:translate-y-[-4px] transition-transform">
             <div className="mb-4">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">{service.category}</span>
             </div>
             <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
             </h4>
             <p className="text-sm text-muted-foreground line-clamp-2">
                {service.shortDescription}
             </p>
          </Link>
        ))}
      </div>
    </div>
  );
}


