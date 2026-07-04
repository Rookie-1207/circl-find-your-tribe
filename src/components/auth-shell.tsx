import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { ACTIVITIES } from "@/data/activities";

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left form panel */}
      <div className="relative flex flex-col justify-between px-6 py-8 md:px-12 lg:px-16">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="relative inline-flex size-7 items-center justify-center">
              <span className="absolute inset-0 rounded-full border-2 border-foreground/80" />
              <span className="absolute left-1.5 top-1.5 size-4 rounded-full border-2 border-brand" />
            </span>
            <span className="text-lg font-bold tracking-tight">Circl</span>
          </Link>
          <ThemeToggle />
        </div>

        <div className="mx-auto flex w-full max-w-sm flex-col justify-center py-16">
          <h1 className="text-balance text-3xl font-extrabold tracking-tighter md:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
          <div className="mt-8">{children}</div>
        </div>

        <div className="mx-auto w-full max-w-sm text-sm text-muted-foreground">{footer}</div>
      </div>

      {/* Right visual panel */}
      <aside className="relative hidden overflow-hidden bg-surface/70 lg:block">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-brand/25 blur-3xl animate-float-orb" />
          <div className="absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-fuchsia-400/20 blur-3xl animate-float-orb [animation-delay:-6s]" />
        </div>
        <div className="flex h-full flex-col justify-between p-16">
          <div className="max-w-md">
            <span className="font-mono text-xs uppercase tracking-widest text-brand">Find Your Circle</span>
            <p className="mt-4 text-3xl font-extrabold leading-tight tracking-tight">
              Meaningful connections, built around what you actually do.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {ACTIVITIES.slice(0, 9).map((a) => (
              <div key={a.slug} className="rounded-2xl border border-border bg-background/60 p-4 backdrop-blur">
                <div className="text-2xl">{a.emoji}</div>
                <div className="mt-3 text-sm font-semibold">{a.name}</div>
                <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{a.active} active</div>
              </div>
            ))}
          </div>

          <blockquote className="max-w-md text-sm text-muted-foreground">
            "It doesn't feel like an app trying to get me to swipe. It just quietly connects."
            <div className="mt-2 text-xs font-semibold text-foreground">— Divya R., early member</div>
          </blockquote>
        </div>
      </aside>
    </div>
  );
}
