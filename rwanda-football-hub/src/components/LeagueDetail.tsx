import type { League } from "@/types/leagues";

interface Props {
  league: League;
}

export function LeagueDetail({ league }: Props) {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{league.name}</h1>
      {league.description && (
        <p className="text-sm text-black/70 dark:text-white/70">
          {league.description}
        </p>
      )}
      <ul className="grid gap-2 sm:grid-cols-2">
        {league.teams.map((team) => (
          <li
            key={team.id}
            className="rounded border border-black/10 dark:border-white/10 p-3"
          >
            {team.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
