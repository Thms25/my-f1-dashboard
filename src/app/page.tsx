// sections
import HomeView from '@/sections/home/home-view';

import { getStandings } from '@/utils/fetch-utils/fetch-utils';

// ----------------------------------------------------------------------

export default async function HomePage() {
  const constructors = await getStandings('2024', 'constructors');
  const drivers = await getStandings('2024', 'drivers');

  return <HomeView driversStandings={drivers} teamStandings={constructors} />;
}
