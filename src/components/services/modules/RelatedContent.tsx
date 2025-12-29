"use client";

import { ServiceData } from "@/lib/data/services";
import { Link } from "next-view-transitions";
import { ArrowRight, FileText, CheckCircle, Brain } from "lucide-react";

interface RelatedContentProps {
  relatedServices: ServiceData[];
  relatedTests?: ("mbi" | "diva")[];
}

export function RelatedContent({ relatedServices, relatedTests }: RelatedContentProps) {
  return (
    <div className="border-border mt-12 border-t py-12">
      <h3 className="font-display mb-8 text-xl font-bold">
        Pour aller <span className="text-primary">plus loin</span>
      </h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* TESTS DIAGNOSTICS */}
        {relatedTests?.includes("mbi") && (
          <Link
            href="/tests/burnout"
            className="group card-premium bg-linear-to-br from-orange-50 to-white p-6 transition-colors hover:border-orange-200"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-orange-100 p-3 text-orange-600">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-foreground group-hover:text-primary mb-1 font-bold transition-colors">
                  Test Burn-out (MBI)
                </h4>
                <p className="text-muted-foreground mb-3 text-sm">
                  Évaluez votre niveau d'épuisement professionnel.
                </p>
                <span className="flex items-center text-xs font-semibold text-orange-600">
                  Passer le test <ArrowRight className="ml-1 h-3 w-3" />
                </span>
              </div>
            </div>
          </Link>
        )}

        {relatedTests?.includes("diva") && (
          <Link
            href="/tests/tdah"
            className="group card-premium bg-linear-to-br from-blue-50 to-white p-6 transition-colors hover:border-blue-200"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                <Brain className="h-6 w-6" /> {/* Requires Brain import, handled below */}
              </div>
              <div>
                <h4 className="text-foreground group-hover:text-primary mb-1 font-bold transition-colors">
                  Test TDAH (DIVA)
                </h4>
                <p className="text-muted-foreground mb-3 text-sm">Bilan complet TDAH Adulte.</p>
                <span className="flex items-center text-xs font-semibold text-blue-600">
                  Passer le test <ArrowRight className="ml-1 h-3 w-3" />
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* RELATED SERVICES */}
        {relatedServices.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group card-premium p-6 transition-transform hover:translate-y-[-4px]"
          >
            <div className="mb-4">
              <span className="text-primary text-xs font-bold tracking-wider uppercase">
                {service.category}
              </span>
            </div>
            <h4 className="text-foreground group-hover:text-primary mb-2 font-bold transition-colors">
              {service.title}
            </h4>
            <p className="text-muted-foreground line-clamp-2 text-sm">{service.shortDescription}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
