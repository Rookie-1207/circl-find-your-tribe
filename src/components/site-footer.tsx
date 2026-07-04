import { Link } from "@tanstack/react-router";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="relative inline-flex size-7 items-center justify-center">
                <span className="absolute inset-0 rounded-full border-2 border-foreground/80" />
                <span className="absolute left-1.5 top-1.5 size-4 rounded-full border-2 border-brand" />
              </span>
              <span className="text-lg font-bold tracking-tight">Circl</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The social infrastructure for activity-based friendships. Built for people who'd rather show up than swipe.
            </p>
            <div className="mt-6 flex gap-2">
              {[Twitter, Instagram, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
          <FooterCol title="Product" links={[["Discover","#"],["Activities","#"],["Circles","#"],["Safety","#"]]} />
          <FooterCol title="Company" links={[["About","#"],["Community","#"],["Journal","#"],["Careers","#"]]} />
          <FooterCol title="Legal" links={[["Privacy","#"],["Terms","#"],["Contact","#"],["Cookies","#"]]} />
        </div>
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            © 2026 Circl Technologies, Inc.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link to="/login" className="hover:text-foreground">Sign in</Link>
            <Link to="/signup" className="hover:text-foreground">Create account</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div className="flex flex-col gap-3 text-sm">
      <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-foreground">{title}</div>
      {links.map(([label, href]) => (
        <a key={label} href={href} className="text-muted-foreground transition-colors hover:text-foreground">
          {label}
        </a>
      ))}
    </div>
  );
}
