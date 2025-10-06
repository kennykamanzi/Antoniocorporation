import { leagues } from "@/data/leagues";
import { LeagueList } from "@/components/LeagueList";

export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-2xl font-bold">Rwandan Football Hub</h1>
        <p className="text-sm text-black/70 dark:text-white/70 mt-1">
          News, stats and all leagues in Rwanda.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Leagues</h2>
        <LeagueList leagues={leagues} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Featured News</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <article className="rounded border border-black/10 dark:border-white/10 p-4">
            <h3 className="font-medium">APR win Kigali Derby</h3>
            <p className="text-sm text-black/70 dark:text-white/70 mt-1">
              Early season headlines from the Premier League.
            </p>
          </article>
          <article className="rounded border border-black/10 dark:border-white/10 p-4">
            <h3 className="font-medium">Women’s League kicks off</h3>
            <p className="text-sm text-black/70 dark:text-white/70 mt-1">
              Title contenders set the pace in matchweek 1.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
