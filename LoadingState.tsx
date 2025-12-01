import { cn } from '@/lib/utils';

export function LoadingState() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className={cn(
            'animate-pulse rounded-lg border border-border bg-card p-5',
            'animation-delay-' + i
          )}
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-muted" />
              <div>
                <div className="h-5 w-32 rounded bg-muted" />
                <div className="mt-1 h-3 w-24 rounded bg-muted" />
              </div>
            </div>
            <div className="h-6 w-16 rounded-full bg-muted" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="h-14 rounded-md bg-muted" />
            <div className="h-14 rounded-md bg-muted" />
          </div>
        </div>
      ))}
    </div>
  );
}
