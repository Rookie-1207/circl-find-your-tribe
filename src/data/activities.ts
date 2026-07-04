import {
  Dumbbell, BookOpen, Trophy, Code2, Gamepad2, Coffee, Music, Film, Plane,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Activity = {
  slug: string;
  name: string;
  emoji: string;
  icon: LucideIcon;
  blurb: string;
  active: string;
  tint: string; // tailwind bg class token for tint
  accent: string; // tailwind text class
};

export const ACTIVITIES: Activity[] = [
  { slug: "gym", name: "Gym", emoji: "💪", icon: Dumbbell, blurb: "Lift heavy, run early, or vibe on the mat.", active: "1.2k", tint: "bg-orange-500/10", accent: "text-orange-500" },
  { slug: "study", name: "Study", emoji: "📚", icon: BookOpen, blurb: "Focus sprints and library sessions.", active: "980", tint: "bg-amber-500/10", accent: "text-amber-500" },
  { slug: "sports", name: "Sports", emoji: "🏓", icon: Trophy, blurb: "Pickup games, padel, tennis, football.", active: "1.6k", tint: "bg-emerald-500/10", accent: "text-emerald-500" },
  { slug: "coding", name: "Coding", emoji: "💻", icon: Code2, blurb: "Pair programming and weekend jams.", active: "840", tint: "bg-blue-500/10", accent: "text-blue-500" },
  { slug: "gaming", name: "Gaming", emoji: "🎮", icon: Gamepad2, blurb: "Ranked squads and LAN nights.", active: "2.1k", tint: "bg-violet-500/10", accent: "text-violet-500" },
  { slug: "coffee", name: "Coffee", emoji: "☕", icon: Coffee, blurb: "Cafe crawls before the workday starts.", active: "1.1k", tint: "bg-rose-500/10", accent: "text-rose-500" },
  { slug: "music", name: "Music", emoji: "🎵", icon: Music, blurb: "Local gigs, jam sessions, record hunts.", active: "760", tint: "bg-pink-500/10", accent: "text-pink-500" },
  { slug: "movies", name: "Movies", emoji: "🎬", icon: Film, blurb: "Indie screenings and rewatch clubs.", active: "540", tint: "bg-indigo-500/10", accent: "text-indigo-500" },
  { slug: "travel", name: "Travel", emoji: "✈️", icon: Plane, blurb: "Day trips and weekend getaways.", active: "2.4k", tint: "bg-cyan-500/10", accent: "text-cyan-500" },
];
