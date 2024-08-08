// sections
import DriversView from '@/sections/driver/drivers-view';
import { getDrivers } from '@/utils/fetch-utils/fetch-utils';
import { Driver } from '@/utils/types/types';

// ----------------------------------------------------------------------

export default async function UserListPage() {
  const drivers = (await getDrivers()) as Driver[];
  return <DriversView drivers={drivers} />;
}
