import { createFileRoute, Link } from "@tanstack/react-router";
import { useTheme } from "@/components/theme-provider";
import { Bell, Lock, User, Palette, Globe, LogOut } from "lucide-react";

export const Route = createFileRoute("/app/settings")({
  head: () => ({ meta: [{ title: "Settings — Circl" }, { name: "robots", content: "noindex" }] }),
  component: SettingsPage,
});

function SettingsPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tighter">Settings</h1>
        <p className="mt-1 text-muted-foreground">Manage your account, appearance, and preferences.</p>
      </div>

      <Group icon={User} title="Account">
        <Row label="Full name" value="Aarav Sharma" />
        <Row label="Email" value="aarav@srmuniv.edu.in" />
        <Row label="Username" value="@aarav" />
      </Group>

      <Group icon={Palette} title="Appearance">
        <div className="p-5">
          <p className="text-sm font-medium">Theme</p>
          <p className="text-xs text-muted-foreground">Choose how Circl looks to you.</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {(["light","dark"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={`overflow-hidden rounded-2xl border p-1 transition-all ${theme === t ? "border-foreground ring-2 ring-brand/30" : "border-border"}`}
              >
                <div className={`aspect-[4/3] rounded-xl ${t === "light" ? "bg-gradient-to-br from-white to-slate-100" : "bg-gradient-to-br from-slate-900 to-black"}`} />
                <div className="p-2.5 text-left text-sm font-semibold capitalize">{t}</div>
              </button>
            ))}
          </div>
        </div>
      </Group>

      <Group icon={Bell} title="Notifications">
        <Toggle label="New matches" desc="When someone matches with you." on />
        <Toggle label="Messages" desc="Direct messages and circle chats." on />
        <Toggle label="Weekly digest" desc="A Monday summary of your circles." />
      </Group>

      <Group icon={Lock} title="Privacy & safety">
        <Toggle label="Show me in Discover" desc="Others can see your profile." on />
        <Toggle label="Read receipts" desc="Let people know you've seen their messages." />
      </Group>

      <Group icon={Globe} title="Language & region">
        <Row label="Language" value="English" />
        <Row label="Region" value="India" />
      </Group>

      <div className="flex flex-wrap justify-end gap-3">
        <Link to="/" className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border bg-surface px-4 text-sm font-semibold text-destructive hover:border-destructive/40">
          <LogOut className="size-3.5" /> Sign out
        </Link>
      </div>
    </div>
  );
}

function Group({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-surface">
      <header className="flex items-center gap-2 border-b border-border p-5">
        <Icon className="size-4 text-brand" />
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">{title}</h2>
      </header>
      <div className="divide-y divide-border">{children}</div>
    </section>
  );
}
function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between p-5">
      <div>
        <div className="text-sm font-medium">{label}</div>
      </div>
      <div className="text-sm text-muted-foreground">{value}</div>
    </div>
  );
}
function Toggle({ label, desc, on }: { label: string; desc?: string; on?: boolean }) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-6 p-5">
      <div className="min-w-0">
        <div className="text-sm font-medium">{label}</div>
        {desc && <div className="mt-0.5 text-xs text-muted-foreground">{desc}</div>}
      </div>
      <span className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${on ? "bg-foreground" : "bg-border"}`}>
        <span className={`inline-block size-5 rounded-full bg-background shadow transition-transform ${on ? "translate-x-5" : "translate-x-0.5"}`} />
      </span>
    </label>
  );
}
