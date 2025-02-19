import { getDrivers, getTeams } from '@/utilis/data-fetching'
import { Driver, Team } from '@/utilis/types'
import TeamsView from '@/views/teams/teams-view'

export default async function TeamsPage({
  params,
}: {
  params: Promise<{ season: string }>
}) {
  const { season } = await params
  const drivers = (await getDrivers()) as Driver[]
  const teams = (await getTeams()) as Team[]
  return <TeamsView teams={teams} drivers={drivers} season={season} />
}
