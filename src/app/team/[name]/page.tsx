// sections
import TeamProfileView from '@/sections/team/team-profile-view';
import { getTeam } from '@/utils/fetch-utils/fetch-utils';

// ----------------------------------------------------------------------

export default async function UserProfilePage({ params }) {
  const team = await getTeam(params.name);
  console.log(team);

  return <TeamProfileView team={team} />;
}
