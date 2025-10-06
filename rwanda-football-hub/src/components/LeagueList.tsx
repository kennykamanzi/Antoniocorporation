import Link from "next/link";
import type { League } from "@/types/leagues";

interface LeagueListProps {
  leagues: League[];
}

export function LeagueList({ leagues }: LeagueListProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {leagues.map((league) => (
        <Link
          key={league.id}
          href={
            league.id === "women-first"
              ? "/women/first-division"
              : league.id === "women-second"
              ? "/women/second-division"
              : `/${league.id}`
          }
          className="rounded border border-black/10 dark:border-white/10 p-4 hover:shadow-sm transition-shadow"
        >
          <h3 className="font-semibold">{league.name}</h3>
          {league.description && (
            <p className="text-sm text-black/70 dark:text-white/70 mt-1">
              {league.description}
            </p>
          )}
          <p className="text-xs mt-2">{league.teams.length} teams</p>
        </Link>
      ))}
    </div>
  );
}
