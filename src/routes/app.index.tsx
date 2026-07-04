import { createFileRoute, Link } from "@tanstack/react-router";
import { ACTIVITIES } from "@/data/activities";
import { PEOPLE } from "@/data/people";
import { ArrowRight, Calendar, MapPin, Sparkles, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/app/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="space-y-10">
      <section>
        <div className="rounded-3xl border border-border bg-gradient-to-br from-brand/15 via-fuchsia-500/10 to-cyan-400/10 p-8 md:p-10">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">Good morning, Aarav</span>
          <h1 className="mt-3 text-balance text-3xl font-extrabold tracking-tighter md:text-4xl">
            You have 3 new matches and 2 circles forming near you.
          </h1>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link to="/app/discover" className="inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-4 text-sm font-semibold text-background">
              See who's around <ArrowRight className="size-4" />
            </Link>
            <Link to="/app/matches" className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-surface/70 px-4 text-sm font-semibold backdrop-blur">
              Review matches
            </Link>
          </div>
        </div>
      </section>

      <section>
        <SectionHead title="Your activities" href="/app/discover" />
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {ACTIVITIES.map((a) => (
            <Link key={a.slug} to="/app/discover" className="group flex shrink-0 flex-col rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-foreground/20" style={{ width: 180 }}>
              <div className={`grid size-10 place-items-center rounded-xl ${a.tint} text-lg`}>{a.emoji}</div>
              <div className="mt-4 text-sm font-semibold">{a.name}</div>
              <div className={`mt-0.5 font-mono text-[10px] uppercase tracking-widest ${a.accent}`}>{a.active} active</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div>
          <SectionHead title="Top matches this week" href="/app/matches" icon={Sparkles} />
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {PEOPLE.slice(0, 4).map((p) => (
              <Link key={p.id} to="/app/matches" className="group rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-soft">
                <div className="flex items-start gap-4">
                  <div className={`size-14 shrink-0 rounded-2xl bg-gradient-to-br ${p.avatar}`} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-semibold">{p.name}</p>
                      <span className="shrink-0 rounded-full bg-brand-soft px-2 py-0.5 font-mono text-[10px] font-bold text-brand">{p.compatibility}%</span>
                    </div>
                    <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{p.bio}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.activities.slice(0, 3).map((slug) => {
                        const a = ACTIVITIES.find(x => x.slug === slug)!;
                        return <span key={slug} className={`inline-flex items-center gap-1 rounded-full ${a.tint} px-2 py-0.5 text-[10px] font-semibold ${a.accent}`}>{a.emoji} {a.name}</span>;
                      })}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <SectionHead title="Happening near you" icon={TrendingUp} />
          <div className="mt-4 space-y-3">
            {[
              { title: "Sunset padel doubles", meta: "Tue 6:30 PM · Anna Nagar", tag: "Sports", emoji: "🏓" },
              { title: "Coffee & commits", meta: "Sat 9:00 AM · Higher Ground", tag: "Coding", emoji: "💻" },
              { title: "Indie film night", meta: "Fri 8:00 PM · Palazzo", tag: "Movies", emoji: "🎬" },
            ].map((e) => (
              <div key={e.title} className="rounded-2xl border border-border bg-surface p-5">
                <div className="flex items-start gap-3">
                  <div className="grid size-10 place-items-center rounded-xl bg-accent text-lg">{e.emoji}</div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold">{e.title}</div>
                    <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="size-3" /> {e.meta}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHead({ title, href, icon: Icon }: { title: string; href?: string; icon?: any }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="flex items-center gap-2 text-lg font-bold tracking-tight">
        {Icon && <Icon className="size-4 text-brand" />}
        {title}
      </h2>
      {href && <Link to={href} className="text-xs font-semibold text-muted-foreground hover:text-foreground">See all →</Link>}
    </div>
  );
}
