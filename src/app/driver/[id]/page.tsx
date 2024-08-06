// sections
import { getDriver } from '@/utils/fetch-utils/fetch-utils';
import DriverProfileView from 'src/sections/driver/driver-profile-view';

// ----------------------------------------------------------------------

export default async function DriverPage({ params }) {
  const driver = await getDriver(params.id);

  return <DriverProfileView driver={driver} />;
}
