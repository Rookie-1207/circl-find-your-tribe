import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import {
  Home, Compass, Sparkles, MessageCircle, Bell, Settings as SettingsIcon,
  Search, Plus, User as UserIcon,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/app")({
  head: () => ({ meta: [{ title: "Circl — Home" }, { name: "robots", content: "noindex" }] }),
  component: AppShell,
});

const NAV = [
  { to: "/app", label: "Home", icon: Home, end: true },
  { to: "/app/discover", label: "Discover", icon: Compass },
  { to: "/app/matches", label: "Matches", icon: Sparkles },
  { to: "/app/chat", label: "Messages", icon: MessageCircle },
  { to: "/app/notifications", label: "Notifications", icon: Bell },
  { to: "/app/profile", label: "Profile", icon: UserIcon },
  { to: "/app/settings", label: "Settings", icon: SettingsIcon },
] as const;

function AppShell() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex max-w-[1400px]">
        {/* Sidebar */}
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-border/60 bg-surface/40 px-4 py-6 md:flex">
          <Link to="/" className="flex items-center gap-2 px-3">
            <span className="relative inline-flex size-7 items-center justify-center">
              <span className="absolute inset-0 rounded-full border-2 border-foreground/80" />
              <span className="absolute left-1.5 top-1.5 size-4 rounded-full border-2 border-brand" />
            </span>
            <span className="text-lg font-bold tracking-tight">Circl</span>
          </Link>

          <nav className="mt-10 flex flex-col gap-1">
            {NAV.map((item) => {
              const active = item.end ? pathname === item.to : pathname.startsWith(item.to);
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`group flex items-center gap-3 rounded-full px-3 py-2.5 text-sm font-medium transition-colors ${active ? "bg-foreground text-background" : "text-foreground/70 hover:bg-surface hover:text-foreground"}`}
                >
                  <Icon className="size-4" strokeWidth={active ? 2.2 : 1.75} />
                  {item.label}
                  {item.label === "Notifications" && (
                    <span className={`ml-auto rounded-full px-2 py-0.5 text-[10px] font-bold ${active ? "bg-background/20 text-background" : "bg-brand text-brand-foreground"}`}>3</span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto rounded-3xl border border-border bg-surface p-5">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold">Aarav S.</div>
                <div className="truncate text-xs text-muted-foreground">SRM · CS</div>
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              You're 4 activities away from a full profile.
            </p>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0">
          <header className="sticky top-0 z-40 flex h-16 items-center gap-3 border-b border-border/60 bg-background/70 px-4 backdrop-blur-xl md:px-8">
            <div className="relative flex-1 max-w-md">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                placeholder="Search people, activities, circles..."
                className="h-10 w-full rounded-full border border-border bg-surface pl-11 pr-4 text-sm placeholder:text-muted-foreground/70 focus:border-foreground/25 focus:outline-none focus:ring-4 focus:ring-brand/15"
              />
            </div>
            <div className="ml-auto flex items-center gap-2">
              <button className="inline-flex h-9 items-center gap-1.5 rounded-full bg-foreground pl-3 pr-4 text-xs font-semibold text-background transition-transform hover:scale-[1.02]">
                <Plus className="size-3.5" /> New circle
              </button>
              <ThemeToggle />
              <Link to="/app/profile" className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
            </div>
          </header>

          <div className="px-4 pb-24 pt-6 md:px-8">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Mobile bottom nav */}
      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/85 backdrop-blur-xl md:hidden">
        <div className="mx-auto flex max-w-md items-center justify-around px-4 py-2.5">
          {NAV.slice(0, 5).map((item) => {
            const active = item.end ? pathname === item.to : pathname.startsWith(item.to);
            const Icon = item.icon;
            return (
              <Link key={item.to} to={item.to} className={`grid size-11 place-items-center rounded-full ${active ? "bg-foreground text-background" : "text-muted-foreground"}`}>
                <Icon className="size-5" />
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
