import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, MessageCircle, Users, Bell, CalendarCheck } from "lucide-react";

export const Route = createFileRoute("/app/notifications")({
  head: () => ({ meta: [{ title: "Notifications — Circl" }, { name: "robots", content: "noindex" }] }),
  component: NotificationsPage,
});

const N = [
  { icon: Sparkles, tint: "text-brand bg-brand-soft", title: "3 new matches this week", body: "Priya, Rohan, and Ishita align with your schedule.", when: "just now", unread: true },
  { icon: MessageCircle, tint: "text-emerald-500 bg-emerald-500/10", title: "Aarav sent you a message", body: "\"Sounds good — 6:30 works!\"", when: "14m", unread: true },
  { icon: Users, tint: "text-fuchsia-500 bg-fuchsia-500/10", title: "You were added to Coffee & Commits", body: "Weekly circle · Saturdays 9:00 AM", when: "1h", unread: true },
  { icon: CalendarCheck, tint: "text-amber-500 bg-amber-500/10", title: "Padel session confirmed", body: "Tuesday · 6:30 PM · Central Padel Club", when: "yesterday" },
  { icon: Bell, tint: "text-blue-500 bg-blue-500/10", title: "New activity: Indie Cinema Club", body: "Popular near you — 42 people joined this week.", when: "2d" },
];

function NotificationsPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tighter">Notifications</h1>
          <p className="mt-1 text-muted-foreground">Everything happening in your circle.</p>
        </div>
        <button className="text-xs font-semibold text-muted-foreground hover:text-foreground">Mark all read</button>
      </div>

      <div className="overflow-hidden rounded-3xl border border-border bg-surface">
        {N.map((n, i) => {
          const Icon = n.icon;
          return (
            <div key={i} className={`flex items-start gap-4 border-b border-border/60 p-5 last:border-b-0 ${n.unread ? "bg-brand/[0.03]" : ""}`}>
              <div className={`grid size-11 shrink-0 place-items-center rounded-2xl ${n.tint}`}>
                <Icon className="size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold">{n.title}</p>
                  {n.unread && <span className="size-1.5 rounded-full bg-brand" />}
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">{n.body}</p>
              </div>
              <span className="shrink-0 text-[11px] text-muted-foreground">{n.when}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
