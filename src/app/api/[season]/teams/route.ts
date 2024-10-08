import { scrapeTeams } from '@/utils/api-utils/scrape-teams';
import { getDrivers } from '@/utils/fetch-utils/fetch-utils';

function sortTeams(standings, drivers, teams) {
  const team_standings = standings.map((standing) => {
    const driver_pair = drivers.filter(
      (d) =>
        d.team.toLowerCase().includes(standing.Constructor.name.toLowerCase()) ||
        standing.Constructor.name.toLowerCase().includes(d.team.toLowerCase())
    );
    const team = teams.find(
      (t) =>
        t.name.toLowerCase().includes(standing.Constructor.name.toLowerCase()) ||
        standing.Constructor.name.toLowerCase().includes(t.name.toLowerCase())
    );

    return {
      id: standing.Constructor.constructorId,
      name: team?.name || driver_pair[0].team || standing.Constructor.name,
      position: +standing.position,
      logo: team?.logo || '',
      car: team?.car || '',
      wins: +standing.wins,
      points: +standing.points,
      drivers: driver_pair,
    };
  });
  return team_standings;
}

export async function GET(req: Request, { params }: { params: { season: string } }) {
  try {
    const drivers = await getDrivers();
    const teams = await scrapeTeams();
    const res = await fetch(`${process.env.ERGAST_API}/${params.season}/ConstructorStandings.json`);
    const data = await res.json();
    const standing_data = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;

    const standings = sortTeams(standing_data, drivers, teams);

    return Response.json(standings, {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}
