import { supabase } from "@/lib/supabase";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthShell } from "@/components/auth-shell";
import { Field, SocialRow, Divider } from "./login";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Create your Circl account" }, { name: "robots", content: "noindex" }] }),
  component: SignupPage,
});

function SignupPage() {
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
  const nav = useNavigate();
const submit = async (e: FormEvent) => {
  e.preventDefault();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
      },
    },
  });

  if (error) {
    alert(error.message);
    return;
  }

  alert("Account created successfully! Please check your email to verify your account.");

  nav({ to: "/login" });
};
  return (
    <AuthShell
      title="Find your circle."
      subtitle="Two minutes to set up. No swiping, ever."
      footer={<p>Already have an account? <Link to="/login" className="font-semibold text-foreground hover:underline">Sign in</Link></p>}
    >
      <form onSubmit={submit} className="space-y-4">
        <SocialRow />
        <Divider />
 <Field
  icon={User}
  type="text"
  label="Full name"
  placeholder="Aarav Sharma"
  required
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

<Field
  icon={Mail}
  type="email"
  label="Email"
  placeholder="you@university.edu"
  required
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

<Field
  icon={Lock}
  type="password"
  label="Password"
  placeholder="At least 8 characters"
  required
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
        <p className="text-[11px] leading-relaxed text-muted-foreground">
          By continuing, you agree to Circl's <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
        </p>
        <button type="submit" className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground text-sm font-semibold text-background transition-transform hover:scale-[1.01]">
          Create account <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </form>
    </AuthShell>
  );
}
