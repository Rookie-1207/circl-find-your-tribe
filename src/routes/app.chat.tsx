import { createFileRoute } from "@tanstack/react-router";
import { PEOPLE } from "@/data/people";
import { ACTIVITIES } from "@/data/activities";
import { useState } from "react";
import { Send, Phone, Video, MoreHorizontal } from "lucide-react";

export const Route = createFileRoute("/app/chat")({
  head: () => ({ meta: [{ title: "Messages — Circl" }, { name: "robots", content: "noindex" }] }),
  component: ChatPage,
});

const CHATS = PEOPLE.map((p, i) => ({
  ...p,
  last: ["Sounds good — 6:30 works!", "Sent you the court link.", "Coffee at Higher Ground tmr?", "Reading list attached 🙂", "GG last night 🎮", "Boba after class?"][i],
  when: ["2m","14m","1h","3h","Yesterday","2d"][i],
  unread: [2, 0, 1, 0, 0, 0][i],
}));

function ChatPage() {
  const [active, setActive] = useState(0);
  const chat = CHATS[active];

  return (
    <div className="grid h-[calc(100vh-8rem)] grid-cols-1 gap-0 overflow-hidden rounded-3xl border border-border bg-surface md:grid-cols-[320px_1fr]">
      {/* List */}
      <aside className="flex flex-col border-r border-border">
        <div className="border-b border-border p-4">
          <h2 className="text-lg font-bold tracking-tight">Messages</h2>
        </div>
        <div className="flex-1 overflow-y-auto">
          {CHATS.map((c, i) => (
            <button key={c.id} onClick={() => setActive(i)} className={`flex w-full items-start gap-3 border-b border-border/60 p-4 text-left transition-colors ${i === active ? "bg-accent" : "hover:bg-accent/50"}`}>
              <div className={`size-11 shrink-0 rounded-full bg-gradient-to-br ${c.avatar}`} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate text-sm font-semibold">{c.name}</span>
                  <span className="shrink-0 text-[10px] text-muted-foreground">{c.when}</span>
                </div>
                <p className="mt-0.5 truncate text-xs text-muted-foreground">{c.last}</p>
              </div>
              {c.unread > 0 && (
                <span className="mt-2 grid size-5 place-items-center rounded-full bg-brand text-[10px] font-bold text-brand-foreground">{c.unread}</span>
              )}
            </button>
          ))}
        </div>
      </aside>

      {/* Thread */}
      <section className="hidden flex-col md:flex">
        <header className="flex items-center gap-3 border-b border-border p-4">
          <div className={`size-10 rounded-full bg-gradient-to-br ${chat.avatar}`} />
          <div>
            <div className="text-sm font-semibold">{chat.name}</div>
            <div className="text-[11px] text-emerald-500">● Active now</div>
          </div>
          <div className="ml-auto flex gap-1 text-muted-foreground">
            <IconBtn><Phone className="size-4" /></IconBtn>
            <IconBtn><Video className="size-4" /></IconBtn>
            <IconBtn><MoreHorizontal className="size-4" /></IconBtn>
          </div>
        </header>

        <div className="flex-1 space-y-4 overflow-y-auto bg-background/50 p-6">
          <DayDivider>Today</DayDivider>
          <Bubble side="them">Hey! Saw we both matched on {chat.activities[0]}.</Bubble>
          <Bubble side="them">You free this week for a session?</Bubble>
          <Bubble side="me">Yeah — Tuesday evening works. Where do you usually go?</Bubble>
          <Bubble side="them">{chat.last}</Bubble>
          <div className="flex flex-wrap gap-2">
            {chat.activities.map((slug) => {
              const a = ACTIVITIES.find(x => x.slug === slug)!;
              return <span key={slug} className={`inline-flex items-center gap-1 rounded-full ${a.tint} px-2.5 py-1 text-[11px] font-semibold ${a.accent}`}>{a.emoji} {a.name}</span>;
            })}
          </div>
        </div>

        <div className="border-t border-border p-4">
          <div className="flex items-center gap-2 rounded-full border border-border bg-background px-4">
            <input placeholder="Write a message..." className="h-11 flex-1 bg-transparent text-sm focus:outline-none" />
            <button className="grid size-9 place-items-center rounded-full bg-foreground text-background">
              <Send className="size-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function IconBtn({ children }: { children: React.ReactNode }) {
  return <button className="grid size-9 place-items-center rounded-full hover:bg-accent">{children}</button>;
}
function DayDivider({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 py-2 text-[11px] uppercase tracking-widest text-muted-foreground">
      <span className="h-px flex-1 bg-border" /> {children} <span className="h-px flex-1 bg-border" />
    </div>
  );
}
function Bubble({ side, children }: { side: "me" | "them"; children: React.ReactNode }) {
  const mine = side === "me";
  return (
    <div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${mine ? "bg-foreground text-background rounded-br-md" : "bg-surface border border-border text-foreground rounded-bl-md"}`}>
        {children}
      </div>
    </div>
  );
}
