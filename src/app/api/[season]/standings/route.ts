import { scrapeTeams } from '@/utils/api-utils/scrape-teams';
import { getDrivers } from '@/utils/fetch-utils/fetch-utils';

function sortDrivers(standings, drivers, teams) {
  const drivers_standings = standings.map((standing) => {
    const driver = drivers.find((d) => d.code === standing.Driver.code);
    return {
      full_name: driver?.name || standing.Driver.givenName + ' ' + standing.Driver.familyName,
      team: driver?.team || standing.Constructors[0].name,
      number: driver?.driver_number || standing.Driver.permanentNumber,
      code: standing.Driver.code,
      position: +standing.position,
      points: +standing.points,
      wins: +standing.wins,
      image: driver?.image || '',
      wiki: standing.Driver.url,
      birthday: standing.Driver.dateOfBirth,
      nationality: standing.Driver.nationality,
      team_nationality: standing.Constructors[0].nationality,
      country_code: driver?.country_code || '',
    };
  });
  return drivers_standings;
}

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
  const { searchParams } = new URL(req.url);
  const table = searchParams.get('table');
  try {
    const drivers = await getDrivers();
    const teams = await scrapeTeams();
    const res = await fetch(`${process.env.ERGAST_API}/${params.season}/${table}.json`);
    const data = await res.json();
    const standing_datas = data.MRData.StandingsTable.StandingsLists[0];

    const standings =
      table === 'driverStandings'
        ? sortDrivers(standing_datas.DriverStandings, drivers, teams)
        : sortTeams(standing_datas.ConstructorStandings, drivers, teams);

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
