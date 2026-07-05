import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthShell } from "@/components/auth-shell";
import { Mail, Lock, ArrowRight } from "lucide-react";
import type { FormEvent } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — Circl" }, { name: "robots", content: "noindex" }] }),
  component: LoginPage,
});

function LoginPage() {
  const nav = useNavigate();
  const submit = (e: FormEvent) => { e.preventDefault(); nav({ to: "/app" }); };
  return (
    <AuthShell
      title="Welcome back."
      subtitle="Sign in to see who's around this week."
      footer={
        <p>New to Circl? <Link to="/signup" className="font-semibold text-foreground hover:underline">Create an account</Link></p>
      }
    >
      <form onSubmit={submit} className="space-y-4">
        <SocialRow />
        <Divider />
        <Field icon={Mail} type="email" placeholder="you@university.edu" label="Email" required />
        <Field icon={Lock} type="password" placeholder="••••••••" label="Password" required />
        <div className="flex items-center justify-between text-xs">
          <label className="inline-flex items-center gap-2 text-muted-foreground">
            <input type="checkbox" className="size-3.5 rounded border-border" /> Remember me
          </label>
          <a href="#" className="font-medium text-brand hover:underline">Forgot password?</a>
        </div>
        <button type="submit" className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground text-sm font-semibold text-background transition-transform hover:scale-[1.01]">
          Sign in <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </form>
    </AuthShell>
  );
}

export function SocialRow() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[["Google","G"],["Apple","A"]].map(([label, mono]) => (
        <button key={label} type="button" className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-surface text-sm font-medium text-foreground transition-colors hover:border-foreground/20">
          <span className="grid size-5 place-items-center rounded-full bg-foreground text-[11px] font-bold text-background">{mono}</span>
          {label}
        </button>
      ))}
    </div>
  );
}
export function Divider() {
  return (
    <div className="flex items-center gap-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
      <span className="h-px flex-1 bg-border" /> or <span className="h-px flex-1 bg-border" />
    </div>
  );
}
import type { ChangeEvent } from "react";

export function Field({
  icon: Icon,
  label,
  type,
  placeholder,
  required,
  value,
  onChange,
}: {
  icon: any;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-foreground/80">
        {label}
      </span>

      <span className="group relative flex items-center">
        <Icon className="pointer-events-none absolute left-4 size-4 text-muted-foreground" />

        <input
          type={type}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="h-12 w-full rounded-full border border-border bg-surface pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-foreground/30 focus:outline-none focus:ring-4 focus:ring-brand/15"
        />
      </span>
    </label>
  );
}