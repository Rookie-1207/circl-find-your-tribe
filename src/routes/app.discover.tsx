import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ACTIVITIES } from "@/data/activities";
import { PEOPLE } from "@/data/people";
import { MapPin, Filter, Calendar } from "lucide-react";

export const Route = createFileRoute("/app/discover")({
  head: () => ({ meta: [{ title: "Discover — Circl" }, { name: "robots", content: "noindex" }] }),
  component: DiscoverPage,
});

function DiscoverPage() {
  const [active, setActive] = useState<string>("all");
  const filtered = active === "all" ? PEOPLE : PEOPLE.filter(p => p.activities.includes(active));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tighter">Discover</h1>
        <p className="mt-1 text-muted-foreground">People near you, filtered by activity and schedule.</p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button onClick={() => setActive("all")} className={`h-9 rounded-full border px-4 text-sm font-semibold transition-colors ${active === "all" ? "border-foreground bg-foreground text-background" : "border-border bg-surface hover:border-foreground/20"}`}>All</button>
        {ACTIVITIES.map((a) => (
          <button
            key={a.slug}
            onClick={() => setActive(a.slug)}
            className={`inline-flex h-9 items-center gap-1.5 rounded-full border px-4 text-sm font-semibold transition-colors ${active === a.slug ? "border-foreground bg-foreground text-background" : "border-border bg-surface hover:border-foreground/20"}`}
          >
            <span>{a.emoji}</span> {a.name}
          </button>
        ))}
        <button className="ml-auto inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-surface px-4 text-sm font-semibold"><Filter className="size-3.5" /> Filters</button>
      </div>

      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article key={p.id} className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-foreground/15 hover:shadow-elevated">
              <div className={`relative aspect-[5/4] bg-gradient-to-br ${p.avatar}`}>
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
                  <div>
                    <div className="text-lg font-bold text-white drop-shadow">{p.name}, {p.age}</div>
                    <div className="flex items-center gap-1 text-xs text-white/85"><MapPin className="size-3" /> {p.location} · {p.distance}</div>
                  </div>
                  <span className="rounded-full bg-white/95 px-2.5 py-1 font-mono text-[11px] font-bold text-foreground">{p.compatibility}%</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm text-muted-foreground line-clamp-2">{p.bio}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.activities.map((slug) => {
                    const a = ACTIVITIES.find(x => x.slug === slug)!;
                    return <span key={slug} className={`inline-flex items-center gap-1 rounded-full ${a.tint} px-2 py-0.5 text-[10px] font-semibold ${a.accent}`}>{a.emoji} {a.name}</span>;
                  })}
                </div>
                <div className="mt-5 flex gap-2">
                  <button className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold hover:border-foreground/20">Pass</button>
                  <button className="flex-1 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background">Connect</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-3xl border border-dashed border-border bg-surface/50 p-16 text-center">
      <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-brand-soft text-brand">
        <Calendar className="size-6" />
      </div>
      <h3 className="mt-6 text-lg font-bold">No one matches that filter yet.</h3>
      <p className="mx-auto mt-1 max-w-sm text-sm text-muted-foreground">Try a different activity, or broaden your schedule window.</p>
    </div>
  );
}
