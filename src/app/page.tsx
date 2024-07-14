// sections
import HomeView from '@/sections/home/home-view';

import { getDrivers } from '@/utils/fetch-utils/driver-fetch';
import { getStandings } from '@/utils/fetch-utils/fetch-utils';
import { getRaces } from '@/utils/fetch-utils/races-fetch';
import { getStandingsOld } from '@/utils/fetch-utils/standings-fetch';
// ----------------------------------------------------------------------

export default async function HomePage() {
  // const drivers = await getDrivers();
  // const races = await getRaces('2024');

  const drivers = await getStandings('2024', 'drivers');
  const constructors = await getStandings('2024', 'constructors');
  // const { driver_standings, team_standings } = await getStandingsOld(races, drivers);
  return <HomeView driversStandings={drivers} teamStandings={constructors} />;
}
