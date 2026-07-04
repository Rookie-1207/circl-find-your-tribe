import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PEOPLE } from "@/data/people";
import { ACTIVITIES } from "@/data/activities";
import { X, Heart, Sparkles, MapPin } from "lucide-react";

export const Route = createFileRoute("/app/matches")({
  head: () => ({ meta: [{ title: "Matches — Circl" }, { name: "robots", content: "noindex" }] }),
  component: MatchesPage,
});

function MatchesPage() {
  const [idx, setIdx] = useState(0);
  const stack = PEOPLE;
  const person = stack[idx % stack.length];
  const next = () => setIdx((i) => i + 1);

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tighter">Your matches</h1>
        <p className="mt-1 text-muted-foreground">Curated daily. Not endless.</p>
      </div>

      <div className="relative">
        {/* Stack shadows */}
        <div className="absolute inset-0 translate-y-4 scale-[0.94] rounded-[32px] border border-border bg-surface opacity-60" />
        <div className="absolute inset-0 translate-y-2 scale-[0.97] rounded-[32px] border border-border bg-surface opacity-80" />

        <article key={person.id} className="animate-entrance relative overflow-hidden rounded-[32px] border border-border bg-surface shadow-elevated">
          <div className={`aspect-[4/5] bg-gradient-to-br ${person.avatar}`}>
            <div className="flex h-full flex-col justify-end p-8 text-white">
              <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest backdrop-blur">
                <Sparkles className="size-3" /> {person.compatibility}% match
              </div>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tighter drop-shadow">{person.name}, {person.age}</h2>
              <div className="mt-1 flex items-center gap-1 text-sm text-white/90"><MapPin className="size-3.5" /> {person.location} · {person.distance}</div>
            </div>
          </div>
          <div className="p-7">
            <p className="text-base leading-relaxed text-foreground">{person.bio}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {person.activities.map((slug) => {
                const a = ACTIVITIES.find(x => x.slug === slug)!;
                return <span key={slug} className={`inline-flex items-center gap-1.5 rounded-full ${a.tint} px-3 py-1 text-xs font-semibold ${a.accent}`}>{a.emoji} {a.name}</span>;
              })}
            </div>
          </div>
        </article>
      </div>

      <div className="flex items-center justify-center gap-6 pt-2">
        <button onClick={next} className="grid size-16 place-items-center rounded-full border border-border bg-surface text-muted-foreground shadow-soft transition-all hover:scale-105 hover:text-foreground">
          <X className="size-6" />
        </button>
        <button onClick={next} className="grid size-20 place-items-center rounded-full bg-gradient-to-br from-brand to-fuchsia-500 text-white shadow-glow transition-transform hover:scale-105">
          <Heart className="size-8" fill="currentColor" />
        </button>
        <button onClick={next} className="grid size-16 place-items-center rounded-full border border-border bg-surface text-brand shadow-soft transition-all hover:scale-105">
          <Sparkles className="size-6" />
        </button>
      </div>
    </div>
  );
}
