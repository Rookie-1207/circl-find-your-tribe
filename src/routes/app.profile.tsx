import { createFileRoute } from "@tanstack/react-router";
import { ACTIVITIES } from "@/data/activities";
import { MapPin, Edit3, Settings } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/app/profile")({
  head: () => ({ meta: [{ title: "Your profile — Circl" }, { name: "robots", content: "noindex" }] }),
  component: ProfilePage,
});

function ProfilePage() {
  const mine = ["coding","coffee","gym","music"];
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {/* Cover */}
      <div className="relative overflow-hidden rounded-3xl border border-border">
        <div className="h-48 bg-gradient-to-br from-brand via-fuchsia-500 to-cyan-400" />
        <div className="flex flex-col items-start gap-6 bg-surface px-8 pb-8 pt-0 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-end">
            <div className="-mt-14 size-28 rounded-3xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 ring-4 ring-surface" />
            <div className="pb-1">
              <h1 className="text-3xl font-extrabold tracking-tighter">Aarav Sharma</h1>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="size-3.5" /> SRM Chennai · CS Senior
              </p>
            </div>
          </div>
          <div className="flex gap-2 pb-2">
            <button className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border bg-background px-4 text-sm font-semibold"><Edit3 className="size-3.5" /> Edit profile</button>
            <Link to="/app/settings" className="grid size-10 place-items-center rounded-full border border-border bg-background"><Settings className="size-4" /></Link>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Stat k="86%" v="Profile complete" />
        <Stat k="12" v="Circles joined" />
        <Stat k="47" v="Sessions attended" />
      </div>

      <Section title="About">
        <p className="text-base leading-relaxed">
          CS senior at SRM. Rust + weekend climbing. Looking for a co-hacker for weekend builds and a steady gym partner for mornings.
        </p>
      </Section>

      <Section title="Interests">
        <div className="flex flex-wrap gap-2">
          {mine.map((slug) => {
            const a = ACTIVITIES.find(x => x.slug === slug)!;
            return (
              <span key={slug} className={`inline-flex items-center gap-1.5 rounded-full ${a.tint} px-3 py-1.5 text-sm font-semibold ${a.accent}`}>
                {a.emoji} {a.name}
              </span>
            );
          })}
        </div>
      </Section>

      <Section title="Availability">
        <div className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
          {["Weekday mornings","Weekday evenings","Weekend afternoons"].map((t) => (
            <div key={t} className="rounded-2xl border border-border bg-surface p-4 font-medium">{t}</div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-border bg-surface p-6 md:p-8">
      <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-muted-foreground">{title}</h2>
      {children}
    </section>
  );
}
function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-3xl border border-border bg-surface p-6">
      <div className="text-3xl font-extrabold tracking-tighter">{k}</div>
      <div className="mt-1 text-xs text-muted-foreground">{v}</div>
    </div>
  );
}
