import { getDrivers, getTeams } from '@/utilis/data-fetching'
import { Driver, Team } from '@/utilis/types'
import DriversView from '@/views/drivers/drivers-view'

export default async function DriversPage({
  params,
}: {
  params: Promise<{ season: string }>
}) {
  const { season } = await params
  const drivers = (await getDrivers()) as Driver[]
  const teams = (await getTeams()) as Team[]
  return <DriversView drivers={drivers} teams={teams} season={season} />
}
