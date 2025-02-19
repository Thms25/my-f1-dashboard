import Container from '@/components/Container'
import { Card, CardTitle } from '@/components/ui/card'
import { getTeam } from '@/utilis/data-fetching'
import { Team } from '@/utilis/types'
import TeamView from '@/views/teams/team-view'

export default async function TeamPage({
  params,
}: {
  params: Promise<{ id: string; season: string }>
}) {
  const { id, season } = await params
  const team = (await getTeam(id, season)) as Team
  return <TeamView team={team} season={season} />
}
