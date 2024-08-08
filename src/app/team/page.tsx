// sections
import TeamsView from '@/sections/team/teams-view';

// Utils
import { getTeams } from '@/utils/fetch-utils/fetch-utils';
import { Team } from '@/utils/types/types';

// ----------------------------------------------------------------------

export default async function TeamsPage() {
  const teams = (await getTeams()) as Team[];
  console.log(teams);

  return <TeamsView teams={teams} />;
}
