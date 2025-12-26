export function SectionSkeleton() {
  return (
    <div className="animate-pulse py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="h-8 w-48 bg-muted/50 rounded-lg mx-auto mb-4" />
        <div className="h-4 w-96 max-w-full bg-muted/50 rounded mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-64 bg-muted/50 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border border-border bg-card p-6">
      <div className="h-12 w-12 bg-muted/50 rounded-lg mb-4" />
      <div className="h-6 w-3/4 bg-muted/50 rounded mb-2" />
      <div className="h-4 w-full bg-muted/50 rounded mb-2" />
      <div className="h-4 w-5/6 bg-muted/50 rounded" />
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="animate-pulse min-h-[80vh] flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <div className="h-4 w-32 bg-muted/50 rounded mb-6" />
          <div className="h-12 w-full bg-muted/50 rounded-lg mb-4" />
          <div className="h-12 w-3/4 bg-muted/50 rounded-lg mb-6" />
          <div className="h-6 w-full bg-muted/50 rounded mb-2" />
          <div className="h-6 w-5/6 bg-muted/50 rounded mb-8" />
          <div className="flex gap-4">
            <div className="h-12 w-40 bg-muted/50 rounded-full" />
            <div className="h-12 w-40 bg-muted/50 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function BlogCardSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border border-border bg-card overflow-hidden">
      <div className="h-48 bg-muted/50" />
      <div className="p-6">
        <div className="h-3 w-24 bg-muted/50 rounded mb-3" />
        <div className="h-6 w-full bg-muted/50 rounded mb-2" />
        <div className="h-4 w-full bg-muted/50 rounded mb-2" />
        <div className="h-4 w-3/4 bg-muted/50 rounded mb-4" />
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-muted/50 rounded-full" />
          <div className="h-6 w-16 bg-muted/50 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function TestimonialSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border border-border bg-card p-6">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-5 w-5 bg-muted/50 rounded" />
        ))}
      </div>
      <div className="h-4 w-full bg-muted/50 rounded mb-2" />
      <div className="h-4 w-full bg-muted/50 rounded mb-2" />
      <div className="h-4 w-3/4 bg-muted/50 rounded mb-6" />
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 bg-muted/50 rounded-full" />
        <div>
          <div className="h-4 w-24 bg-muted/50 rounded mb-1" />
          <div className="h-3 w-16 bg-muted/50 rounded" />
        </div>
      </div>
    </div>
  );
}
