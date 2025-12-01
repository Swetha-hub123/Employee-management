import { Zap } from 'lucide-react';

export function DashboardHeader() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
            <Zap className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">EV Monitor</h1>
            <p className="hidden text-xs text-muted-foreground sm:block">Device Dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-status-active pulse-active" />
          <span className="text-sm text-muted-foreground">System Online</span>
        </div>
      </div>
    </header>
  );
}
