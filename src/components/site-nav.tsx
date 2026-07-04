import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./theme-toggle";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Link to="/" className="group flex items-center gap-2">
            <span className="relative inline-flex size-7 items-center justify-center">
              <span className="absolute inset-0 rounded-full border-2 border-foreground/80" />
              <span className="absolute left-1.5 top-1.5 size-4 rounded-full border-2 border-brand/90" />
            </span>
            <span className="text-lg font-bold tracking-tight">Circl</span>
          </Link>
          <div className="hidden gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a href="#activities" className="transition-colors hover:text-foreground">Activities</a>
            <a href="#how" className="transition-colors hover:text-foreground">How it works</a>
            <a href="#community" className="transition-colors hover:text-foreground">Community</a>
            <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/login"
            className="hidden text-sm font-medium text-foreground/80 transition-colors hover:text-foreground sm:inline"
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className="inline-flex h-9 items-center rounded-full bg-foreground px-4 text-sm font-semibold text-background transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Get started
          </Link>
        </div>
      </div>
    </nav>
  );
}
