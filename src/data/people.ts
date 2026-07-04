export type Person = {
  id: string;
  name: string;
  handle: string;
  age: number;
  location: string;
  bio: string;
  activities: string[]; // slugs
  compatibility: number;
  avatar: string; // gradient token
  distance: string;
};

export const PEOPLE: Person[] = [
  { id: "1", name: "Aarav Sharma", handle: "aarav", age: 22, location: "SRM Chennai", bio: "CS senior. Rust + climbing. Looking for a co-hacker for weekend builds.", activities: ["coding","gym","coffee"], compatibility: 96, avatar: "from-indigo-500 to-fuchsia-500", distance: "0.8 km" },
  { id: "2", name: "Priya Menon", handle: "priya.m", age: 21, location: "Anna Nagar", bio: "Designer & runner. Morning 5Ks and quiet cafés. Neo-soul on repeat.", activities: ["gym","coffee","music"], compatibility: 92, avatar: "from-rose-400 to-orange-400", distance: "1.4 km" },
  { id: "3", name: "Rohan Kapoor", handle: "rohan", age: 23, location: "Velachery", bio: "Padel obsessed. Intermediate level, looking for a doubles partner.", activities: ["sports","gym"], compatibility: 88, avatar: "from-emerald-400 to-teal-500", distance: "2.1 km" },
  { id: "4", name: "Ishita Rao", handle: "ish", age: 20, location: "OMR", bio: "Bio major. Focus sprints at Dyson library, boba after.", activities: ["study","coffee","movies"], compatibility: 84, avatar: "from-amber-400 to-pink-500", distance: "3.0 km" },
  { id: "5", name: "Kabir Singh", handle: "kbr", age: 24, location: "Mylapore", bio: "Valorant Diamond. Down for LAN nights and indie films.", activities: ["gaming","movies"], compatibility: 81, avatar: "from-violet-500 to-blue-500", distance: "4.6 km" },
  { id: "6", name: "Ananya Iyer", handle: "ana", age: 22, location: "Adyar", bio: "Guitar + travel. Planning a Pondy trip next weekend.", activities: ["music","travel","coffee"], compatibility: 79, avatar: "from-pink-400 to-purple-500", distance: "5.2 km" },
];
