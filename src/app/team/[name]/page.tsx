// sections
import { getDriver } from '@/utils/fetch-utils/driver-fetch';
import DriverProfileView from 'src/sections/driver/driver-profile-view';

// ----------------------------------------------------------------------

export default async function UserProfilePage({ params }) {
  const driver = await getDriver(params.name);
  return <DriverProfileView driver={driver} />;
}
