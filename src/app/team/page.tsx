// sections
import TeamsView from '@/sections/team/teams-view';

// Utils
import { getStandings, getTeams } from '@/utils/fetch-utils/fetch-utils';
import { Driver } from '@/utils/types/types';

// ----------------------------------------------------------------------

export default async function TeamsPage() {
  const teams = await getStandings('2024', 'constructor');
  return <TeamsView teams={teams} />;
}
