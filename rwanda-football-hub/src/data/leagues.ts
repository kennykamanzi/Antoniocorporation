import type { League, Team } from "@/types/leagues";

const rplTeams: Team[] = [
  { id: "apr", name: "APR FC" },
  { id: "rayon-sport", name: "Rayon Sports" },
  { id: "as-kigali", name: "AS Kigali" },
  { id: "police", name: "Police FC" },
  { id: "marine", name: "Marine FC" },
  { id: "mukura", name: "Mukura Victory Sports" },
  { id: "bugesera", name: "Bugesera FC" },
  { id: "gasogi", name: "Gasogi United" },
  { id: "gorilla", name: "Gorilla FC" },
  { id: "etincelles", name: "Etincelles FC" },
  { id: "rutsiro", name: "Rutsiro FC" },
  { id: "musanze", name: "Musanze FC" },
  { id: "sunrise", name: "Sunrise FC" },
  { id: "espérance", name: "Espérance" },
  { id: "kinyinya", name: "Kinyinya FC" },
  { id: "marines", name: "Marines" }
];

const secondTeams: Team[] = [
  { id: "intel-academy", name: "Intare FC" },
  { id: "heroes", name: "Heroes FC" },
  { id: "vision", name: "Vision FC" },
  { id: "sorwathe", name: "Sorwathe FC" },
];

const thirdTeams: Team[] = [
  { id: "sec-academy", name: "SEC Academy" },
];

const womenFirst: Team[] = [
  { id: "as-kigali-w", name: "AS Kigali Women" },
  { id: "inyange", name: "Inyange WFC" },
];

const womenSecond: Team[] = [
  { id: "kamonyi-w", name: "Kamonyi WFC" },
];

const u20Teams: Team[] = [
  { id: "u20-apr", name: "APR U20" },
  { id: "u20-rayon", name: "Rayon U20" },
];

const u17Teams: Team[] = [
  { id: "u17-apr", name: "APR U17" },
  { id: "u17-rayon", name: "Rayon U17" },
];

export const leagues: League[] = [
  {
    id: "premier-league",
    name: "Rwandan Premier League",
    description: "Top tier men’s football in Rwanda",
    teams: rplTeams,
  },
  {
    id: "second-division",
    name: "Second Division",
    description: "Second tier men’s football in Rwanda",
    teams: secondTeams,
  },
  {
    id: "third-division",
    name: "Third Division",
    description: "Third tier men’s football in Rwanda",
    teams: thirdTeams,
  },
  {
    id: "women-first",
    name: "Women’s First Division",
    description: "Top tier women’s football in Rwanda",
    teams: womenFirst,
  },
  {
    id: "women-second",
    name: "Women’s Second Division",
    description: "Second tier women’s football in Rwanda",
    teams: womenSecond,
  },
  {
    id: "u20-league",
    name: "FERWAFA U20 League",
    description: "Youth U20 league",
    teams: u20Teams,
  },
  {
    id: "u17-league",
    name: "FERWAFA U17 League",
    description: "Youth U17 league",
    teams: u17Teams,
  },
];
