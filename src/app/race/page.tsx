// sections
import RacesView from '@/sections/race/races-view';
import { getRaces } from '@/utils/fetch-utils/races-fetch';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'F1 Races',
};
export default async function RacesPage() {
  const races = await getRaces('2024');
  return <RacesView races={races} />;
}
