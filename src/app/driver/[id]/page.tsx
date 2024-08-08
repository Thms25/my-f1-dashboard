// sections
import { getDriver } from '@/utils/fetch-utils/fetch-utils';
import { Driver } from '@/utils/types/types';
import DriverProfileView from 'src/sections/driver/driver-profile-view';

// ----------------------------------------------------------------------

export default async function DriverPage({ params }) {
  const driver = (await getDriver(params.id)) as Driver;

  return <DriverProfileView driver={driver} />;
}
