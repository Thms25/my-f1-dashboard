// sections
import DriversView from '@/sections/driver/drivers-view';
import { getDrivers } from '@/utils/fetch-utils/driver-fetch';

// ----------------------------------------------------------------------

export default async function UserListPage() {
  const drivers = await getDrivers();
  return <DriversView drivers={drivers} />;
}
