import { leagues } from "@/data/leagues";
import { LeagueDetail } from "@/components/LeagueDetail";

export default function Page() {
  const league = leagues.find((l) => l.id === "u17-league");
  if (!league) return null;
  return <LeagueDetail league={league} />;
}
