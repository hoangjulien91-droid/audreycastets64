import { Link } from "next-view-transitions";
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
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "text-muted-foreground mb-8 flex min-h-[40px] items-center text-sm transition-all",
        className
      )}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {/* Home Link */}
        <li className="flex items-center gap-2">
          <Link
            href="/"
            className="hover:text-primary flex items-center rounded-md p-1.5 transition-colors hover:bg-white/50"
            title="Retour à l'accueil"
          >
            <Home className="h-4 w-4" />
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="text-muted-foreground/40 h-4 w-4" />

              {isLast ? (
                <span
                  className="text-foreground rounded-md border border-white/20 bg-white/40 px-2 py-1 font-medium shadow-sm backdrop-blur-sm"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="hover:text-primary rounded-md px-2 py-1 transition-colors hover:bg-white/50"
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
