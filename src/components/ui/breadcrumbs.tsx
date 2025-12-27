import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center text-sm text-muted-foreground mb-8", className)}>
      <ol className="flex items-center gap-2 flex-wrap">
        {/* Home Link */}
        <li className="flex items-center gap-2">
          <Link 
            href="/" 
            className="flex items-center hover:text-primary transition-colors hover:bg-white/50 p-1.5 rounded-md"
            title="Retour à l'accueil"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-muted-foreground/40" />
              
              {isLast ? (
                <span 
                    className="font-medium text-foreground px-2 py-1 rounded-md bg-white/40 border border-white/20 shadow-sm backdrop-blur-sm"
                    aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href || "#"} 
                  className="hover:text-primary transition-colors hover:bg-white/50 px-2 py-1 rounded-md"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
