export type LeagueId =
  | "premier-league"
  | "second-division"
  | "third-division"
  | "women-first"
  | "women-second"
  | "u20-league"
  | "u17-league";

export interface Team {
  id: string;
  name: string;
  shortName?: string;
  city?: string;
  crestUrl?: string;
}

export interface League {
  id: LeagueId;
  name: string;
  description?: string;
  teams: Team[];
}
