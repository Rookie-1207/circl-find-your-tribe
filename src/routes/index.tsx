import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, MapPin, Calendar, Users, Shield, Zap, MessageCircle, Star, Check } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ACTIVITIES } from "@/data/activities";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Circl — Find Your Circle" },
      { name: "description", content: "Circl helps you find people who share your interests, schedule, and activities. Meaningful, activity-based connections — not dating." },
      { property: "og:title", content: "Circl — Find Your Circle" },
      { property: "og:description", content: "Meaningful activity-based connections. Not dating." },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <TrustStrip />
      <Activities />
      <HowItWorks />
      <ProductPreview />
      <Stats />
      <Testimonials />
      <CTA />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-28 md:pt-28 md:pb-40">
      {/* Ambient gradient orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-brand/20 opacity-40 blur-3xl animate-float-orb" />
        <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-fuchsia-400/20 blur-3xl animate-float-orb [animation-delay:-4s]" />
        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl animate-float-orb [animation-delay:-8s]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <div className="animate-entrance inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            Launching at SRM · Fall 2026
          </div>

          <h1 className="animate-entrance [animation-delay:80ms] mt-6 max-w-5xl text-balance text-5xl font-extrabold leading-[0.95] tracking-tighter sm:text-6xl md:text-7xl lg:text-[92px]">
            The people you're
            <br />
            <span className="relative">
              looking for
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 rounded-full bg-gradient-to-r from-brand via-fuchsia-500 to-cyan-500 opacity-70" />
            </span>{" "}
            are already
            <br /> here.
          </h1>

          <p className="animate-entrance [animation-delay:180ms] mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Circl connects you with people who share your interests, schedule, and goals — for the things you actually do. Not dating. Just your people.
          </p>

          <div className="animate-entrance [animation-delay:260ms] mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              to="/signup"
              className="group inline-flex h-14 items-center gap-2 rounded-full bg-foreground pl-6 pr-5 text-base font-semibold text-background shadow-glow transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Find your circle
              <span className="grid size-7 place-items-center rounded-full bg-background/15 transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="size-4" />
              </span>
            </Link>
            <Link
              to="/app"
              className="inline-flex h-14 items-center gap-2 rounded-full border border-border bg-surface/70 px-6 text-base font-semibold text-foreground backdrop-blur transition-all hover:border-foreground/20"
            >
              <Sparkles className="size-4 text-brand" />
              See it in action
            </Link>
          </div>

          <div className="animate-entrance [animation-delay:340ms] mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <TrustPoint>Free to join</TrustPoint>
            <TrustPoint>Verified profiles</TrustPoint>
            <TrustPoint>No swiping</TrustPoint>
          </div>
        </div>

        {/* Connection illustration */}
        <ConnectionOrbit />
      </div>
    </section>
  );
}

function TrustPoint({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <Check className="size-3.5 text-brand" />
      {children}
    </span>
  );
}

function ConnectionOrbit() {
  const nodes = ACTIVITIES.slice(0, 8);
  return (
    <div className="animate-entrance [animation-delay:480ms] relative mx-auto mt-24 aspect-square w-full max-w-[640px]">
      {/* concentric rings */}
      <div className="absolute inset-[15%] rounded-full border border-dashed border-border" />
      <div className="absolute inset-[30%] rounded-full border border-dashed border-border" />
      <div className="absolute inset-[45%] rounded-full border border-dashed border-border" />

      {/* orbiting ring - outer */}
      <div className="absolute inset-0 animate-orbit-slow">
        {nodes.map((a, i) => {
          const angle = (i / nodes.length) * 2 * Math.PI;
          const x = 50 + 46 * Math.cos(angle);
          const y = 50 + 46 * Math.sin(angle);
          return (
            <div
              key={a.slug}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <div className={`grid size-14 place-items-center rounded-2xl border border-border bg-surface text-2xl shadow-soft animate-orbit-reverse`}>
                {a.emoji}
              </div>
            </div>
          );
        })}
      </div>

      {/* Center brand orb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute inset-0 -m-4 rounded-full bg-brand/20 blur-2xl" />
          <div className="relative grid size-28 place-items-center rounded-full bg-gradient-to-br from-brand to-fuchsia-500 text-background shadow-glow">
            <span className="relative inline-flex size-10 items-center justify-center">
              <span className="absolute inset-0 rounded-full border-2 border-background/90" />
              <span className="absolute left-2 top-2 size-6 rounded-full border-2 border-background/70" />
            </span>
            <span className="absolute inset-0 rounded-full animate-pulse-ring border border-background/40" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustStrip() {
  const items = ["SRM University", "IIT Madras", "VIT", "Anna Univ", "Loyola", "IIIT-B"];
  return (
    <section className="border-y border-border bg-surface/50 py-8">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          Early access rolling out across
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-semibold tracking-tight text-foreground/60">
          {items.map((i) => <span key={i}>{i}</span>)}
        </div>
      </div>
    </section>
  );
}

function Activities() {
  return (
    <section id="activities" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-brand">Activities</span>
            <h2 className="mt-3 text-balance text-4xl font-extrabold tracking-tighter md:text-5xl">
              Choose what you love. <span className="text-muted-foreground">We'll bring the people.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Nine core categories to start, more launching soon. Every card leads to a real, active community.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
          {ACTIVITIES.map((a) => (
            <div
              key={a.slug}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-elevated"
            >
              <div className={`inline-flex size-12 items-center justify-center rounded-2xl ${a.tint} text-2xl`}>
                {a.emoji}
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight">{a.name}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{a.blurb}</p>
              <div className="mt-8 flex items-center justify-between">
                <span className={`font-mono text-[11px] uppercase tracking-widest ${a.accent}`}>
                  {a.active} active
                </span>
                <ArrowRight className="size-4 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", icon: Sparkles, title: "Choose an activity", body: "Pick from 50+ interests and share your schedule. Set the vibe, skill level, and how often you show up." },
    { n: "02", icon: Users, title: "Discover compatible people", body: "Circl surfaces people near you whose interests and windows of time actually overlap with yours." },
    { n: "03", icon: MessageCircle, title: "Meet and build your circle", body: "Chat, plan a session, show up. Turn one aligned Sunday into a group you count on." },
  ];
  return (
    <section id="how" className="border-t border-border bg-surface/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">How it works</span>
          <h2 className="mt-3 text-balance text-4xl font-extrabold tracking-tighter md:text-5xl">
            Three steps between you and your people.
          </h2>
        </div>
        <div className="relative grid gap-8 md:grid-cols-3">
          <div aria-hidden className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className="relative rounded-3xl border border-border bg-background p-8">
                <div className="mb-8 flex items-center justify-between">
                  <div className="relative grid size-16 place-items-center rounded-2xl bg-brand-soft text-brand">
                    <Icon className="size-6" strokeWidth={1.75} />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.n}</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductPreview() {
  return (
    <section className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">Inside Circl</span>
          <h2 className="mt-3 text-balance text-4xl font-extrabold tracking-tighter md:text-5xl">
            Designed for quiet, high-signal connection.
          </h2>
        </div>

        <div className="relative">
          <div aria-hidden className="absolute inset-x-10 -top-10 h-40 rounded-full bg-brand/15 blur-3xl" />
          <div className="relative mx-auto max-w-5xl rounded-3xl border border-border bg-surface p-3 shadow-elevated">
            <div className="overflow-hidden rounded-2xl border border-border bg-background">
              <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                <span className="size-2.5 rounded-full bg-red-400/70" />
                <span className="size-2.5 rounded-full bg-amber-400/70" />
                <span className="size-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">circl.app / discover</span>
              </div>
              <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-3">
                {ACTIVITIES.slice(0, 3).map((a, i) => (
                  <div key={a.slug} className="rounded-2xl border border-border bg-surface p-5">
                    <div className={`mb-3 inline-flex size-10 items-center justify-center rounded-xl ${a.tint} text-lg`}>{a.emoji}</div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold">{["Aarav","Priya","Rohan"][i]}, 2{i+1}</p>
                      <span className="rounded-full bg-brand-soft px-2 py-0.5 font-mono text-[10px] font-semibold text-brand">{[96,92,88][i]}%</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{a.blurb}</p>
                    <div className="mt-4 flex items-center justify-between text-[11px] text-muted-foreground">
                      <span className="inline-flex items-center gap-1"><MapPin className="size-3" /> {["0.8","1.4","2.1"][i]} km</span>
                      <span className="inline-flex items-center gap-1"><Calendar className="size-3" /> {["Today","Tue","Sat"][i]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <Feature icon={Zap} title="Schedule-aware matching" body="See only people whose availability lines up with yours — this week." />
          <Feature icon={Shield} title="Verified & safe" body="Student email verification, in-app reporting, and human moderation." />
          <Feature icon={Users} title="Group-first, not solo-first" body="Turn 1:1 matches into standing circles with shared plans and chat." />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, title, body }: { icon: any; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="mb-4 grid size-10 place-items-center rounded-xl bg-brand-soft text-brand">
        <Icon className="size-5" strokeWidth={1.75} />
      </div>
      <h4 className="text-base font-bold tracking-tight">{title}</h4>
      <p className="mt-1.5 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

function Stats() {
  const stats = [
    { k: "12,400+", v: "Members on the waitlist" },
    { k: "1,850", v: "Circles forming" },
    { k: "9", v: "Core activity categories" },
    { k: "24", v: "Campuses in early access" },
  ];
  return (
    <section id="community" className="border-t border-border bg-surface/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.v} className="text-center md:text-left">
              <div className="text-4xl font-extrabold tracking-tighter md:text-5xl">{s.k}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: "Meera S.", role: "Design student · SRM", quote: "Found a padel group in three days. I'd been telling myself I'd 'find a court' for six months.", tint: "from-rose-400 to-orange-400" },
    { name: "Vikram T.", role: "CS · IIIT-B", quote: "The scheduling filter is the difference. I finally meet people who are actually free when I am.", tint: "from-indigo-500 to-fuchsia-500" },
    { name: "Divya R.", role: "MBA · Loyola", quote: "It doesn't feel like an app trying to get me to swipe. It just quietly connects.", tint: "from-emerald-400 to-teal-500" },
  ];
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">Loved by early members</span>
          <h2 className="mt-3 text-balance text-4xl font-extrabold tracking-tighter md:text-5xl">
            The kind of friends you actually keep.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="flex h-full flex-col rounded-3xl border border-border bg-surface p-8">
              <div className="mb-6 flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <blockquote className="flex-1 text-lg leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <div className={`size-10 rounded-full bg-gradient-to-br ${t.tint}`} />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="faq" className="relative overflow-hidden border-t border-border py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-balance text-4xl font-extrabold tracking-tighter md:text-6xl">
          Your circle is one signup away.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Free to join. Two minutes to set up. No swiping, ever.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/signup"
            className="group inline-flex h-14 items-center gap-2 rounded-full bg-foreground pl-6 pr-5 text-base font-semibold text-background shadow-glow transition-transform hover:scale-[1.02]"
          >
            Get early access
            <span className="grid size-7 place-items-center rounded-full bg-background/15 transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="size-4" />
            </span>
          </Link>
          <Link
            to="/login"
            className="inline-flex h-14 items-center rounded-full border border-border bg-surface/70 px-6 text-base font-semibold text-foreground backdrop-blur"
          >
            I already have an account
          </Link>
        </div>
      </div>
    </section>
  );
}
