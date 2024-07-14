// sections
import HomeView from '@/sections/home/home-view';

import { getCurrentDrivers, getStandings } from '@/utils/fetch-utils/fetch-utils';

// ----------------------------------------------------------------------

export default async function HomePage() {
  const drivers = await getStandings('2024', 'drivers');
  const constructors = await getStandings('2024', 'constructors');
  const currentDrivers = await getCurrentDrivers();
  drivers.forEach((driver: any) => {
    const currentDriver = currentDrivers.find(
      (currentDriver: any) => currentDriver.name_acronym === driver.Driver.code
    );
    driver.Driver = {
      ...driver.Driver,
      broadcastName: currentDriver?.broadcast_name,
      countryCode: currentDriver?.country_code,
      fullName: currentDriver?.full_name,
      image: currentDriver?.headshot_url,
      driverNumber: currentDriver?.driver_number,
      teamColour: currentDriver?.team_colour,
      nameAcronym: currentDriver?.name_acronym,
    };
  });
  return <HomeView driversStandings={drivers} teamStandings={constructors} />;
}
