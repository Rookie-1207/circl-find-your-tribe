import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ACTIVITIES } from "@/data/activities";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/onboarding")({
  head: () => ({ meta: [{ title: "Set up your Circl" }, { name: "robots", content: "noindex" }] }),
  component: OnboardingPage,
});

const STEPS = ["Interests", "Availability", "Goals", "Ready"];

function OnboardingPage() {
  const nav = useNavigate();
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<string[]>(["coffee","coding"]);
  const [times, setTimes] = useState<string[]>(["Weekday evenings"]);

  const next = () => (step < STEPS.length - 1 ? setStep(step + 1) : nav({ to: "/app" }));
  const back = () => step > 0 && setStep(step - 1);

  const toggle = (arr: string[], set: (v: string[]) => void, v: string) =>
    set(arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v]);

  return (
    <div className="min-h-screen bg-background">
      <header className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="relative inline-flex size-7 items-center justify-center">
            <span className="absolute inset-0 rounded-full border-2 border-foreground/80" />
            <span className="absolute left-1.5 top-1.5 size-4 rounded-full border-2 border-brand" />
          </span>
          <span className="text-lg font-bold tracking-tight">Circl</span>
        </Link>
        <ThemeToggle />
      </header>

      <div className="mx-auto max-w-3xl px-6 pb-24">
        {/* Stepper */}
        <div className="mb-12 flex items-center gap-2">
          {STEPS.map((label, i) => (
            <div key={label} className="flex flex-1 items-center gap-2">
              <div className={`grid size-8 place-items-center rounded-full border text-xs font-semibold transition-all ${i <= step ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground"}`}>
                {i < step ? <Check className="size-4" /> : i + 1}
              </div>
              {i < STEPS.length - 1 && (
                <div className={`h-px flex-1 ${i < step ? "bg-foreground" : "bg-border"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="animate-entrance">
          {step === 0 && (
            <>
              <h1 className="text-balance text-4xl font-extrabold tracking-tighter">What are you into?</h1>
              <p className="mt-2 text-muted-foreground">Pick at least three. We'll use these to find your first circles.</p>
              <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
                {ACTIVITIES.map((a) => {
                  const on = picked.includes(a.slug);
                  return (
                    <button
                      key={a.slug}
                      onClick={() => toggle(picked, setPicked, a.slug)}
                      className={`group flex items-center gap-3 rounded-2xl border p-4 text-left transition-all ${on ? "border-foreground bg-foreground text-background" : "border-border bg-surface hover:border-foreground/20"}`}
                    >
                      <span className="text-2xl">{a.emoji}</span>
                      <span className="font-semibold">{a.name}</span>
                      {on && <Check className="ml-auto size-4" />}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <h1 className="text-balance text-4xl font-extrabold tracking-tighter">When are you free?</h1>
              <p className="mt-2 text-muted-foreground">Circl matches on schedule, so this actually matters.</p>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {["Weekday mornings","Weekday afternoons","Weekday evenings","Weekend mornings","Weekend afternoons","Late nights"].map((t) => {
                  const on = times.includes(t);
                  return (
                    <button key={t} onClick={() => toggle(times, setTimes, t)}
                      className={`flex items-center justify-between rounded-2xl border p-5 text-left transition-all ${on ? "border-foreground bg-foreground text-background" : "border-border bg-surface hover:border-foreground/20"}`}>
                      <span className="font-semibold">{t}</span>
                      {on && <Check className="size-4" />}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="text-balance text-4xl font-extrabold tracking-tighter">What are you here for?</h1>
              <p className="mt-2 text-muted-foreground">One of these. You can add more later.</p>
              <div className="mt-10 space-y-3">
                {[
                  ["A regular gym / sport partner", "Meet someone to train with weekly."],
                  ["Find a study group", "Focus sprints, shared notes, quiet cafés."],
                  ["Weekend hobbies & hangouts", "Casual, low-pressure meetups."],
                  ["Serious project collaborators", "Ship something together."],
                ].map(([t, s]) => (
                  <label key={t} className="flex cursor-pointer items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-foreground/20 has-[:checked]:border-foreground has-[:checked]:bg-foreground has-[:checked]:text-background">
                    <input type="radio" name="goal" defaultChecked={t.startsWith("A regular")} className="mt-1.5 accent-brand" />
                    <div>
                      <div className="font-semibold">{t}</div>
                      <div className="mt-1 text-sm text-muted-foreground group-has-[:checked]:text-background/70">{s}</div>
                    </div>
                  </label>
                ))}
              </div>
            </>
          )}

          {step === 3 && (
            <div className="rounded-3xl border border-border bg-surface p-10 text-center">
              <div className="mx-auto mb-6 grid size-20 place-items-center rounded-full bg-brand-soft text-brand">
                <Check className="size-10" strokeWidth={2} />
              </div>
              <h1 className="text-balance text-4xl font-extrabold tracking-tighter">You're in.</h1>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                We're lining up people who match your interests and schedule. Your first suggestions are waiting.
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 flex items-center justify-between">
          <button
            onClick={back}
            disabled={step === 0}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-surface px-5 text-sm font-semibold disabled:opacity-40"
          >
            <ArrowLeft className="size-4" /> Back
          </button>
          <button
            onClick={next}
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-foreground pl-5 pr-4 text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
          >
            {step === STEPS.length - 1 ? "Enter Circl" : "Continue"}
            <span className="grid size-6 place-items-center rounded-full bg-background/15 transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="size-3.5" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
