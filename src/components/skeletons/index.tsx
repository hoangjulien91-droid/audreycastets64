export function SectionSkeleton() {
  return (
    <div className="animate-pulse py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="bg-muted/50 mx-auto mb-4 h-8 w-48 rounded-lg" />
        <div className="bg-muted/50 mx-auto mb-12 h-4 w-96 max-w-full rounded" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-muted/50 h-64 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="border-border bg-card animate-pulse rounded-xl border p-6">
      <div className="bg-muted/50 mb-4 h-12 w-12 rounded-lg" />
      <div className="bg-muted/50 mb-2 h-6 w-3/4 rounded" />
      <div className="bg-muted/50 mb-2 h-4 w-full rounded" />
      <div className="bg-muted/50 h-4 w-5/6 rounded" />
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="flex min-h-[80vh] animate-pulse items-center py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <div className="bg-muted/50 mb-6 h-4 w-32 rounded" />
          <div className="bg-muted/50 mb-4 h-12 w-full rounded-lg" />
          <div className="bg-muted/50 mb-6 h-12 w-3/4 rounded-lg" />
          <div className="bg-muted/50 mb-2 h-6 w-full rounded" />
          <div className="bg-muted/50 mb-8 h-6 w-5/6 rounded" />
          <div className="flex gap-4">
            <div className="bg-muted/50 h-12 w-40 rounded-full" />
            <div className="bg-muted/50 h-12 w-40 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function BlogCardSkeleton() {
  return (
    <div className="border-border bg-card animate-pulse overflow-hidden rounded-xl border">
      <div className="bg-muted/50 h-48" />
      <div className="p-6">
        <div className="bg-muted/50 mb-3 h-3 w-24 rounded" />
        <div className="bg-muted/50 mb-2 h-6 w-full rounded" />
        <div className="bg-muted/50 mb-2 h-4 w-full rounded" />
        <div className="bg-muted/50 mb-4 h-4 w-3/4 rounded" />
        <div className="flex gap-2">
          <div className="bg-muted/50 h-6 w-16 rounded-full" />
          <div className="bg-muted/50 h-6 w-16 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function TestimonialSkeleton() {
  return (
    <div className="border-border bg-card animate-pulse rounded-xl border p-6">
      <div className="mb-4 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-muted/50 h-5 w-5 rounded" />
        ))}
      </div>
      <div className="bg-muted/50 mb-2 h-4 w-full rounded" />
      <div className="bg-muted/50 mb-2 h-4 w-full rounded" />
      <div className="bg-muted/50 mb-6 h-4 w-3/4 rounded" />
      <div className="flex items-center gap-3">
        <div className="bg-muted/50 h-12 w-12 rounded-full" />
        <div>
          <div className="bg-muted/50 mb-1 h-4 w-24 rounded" />
          <div className="bg-muted/50 h-3 w-16 rounded" />
        </div>
      </div>
    </div>
  );
}
