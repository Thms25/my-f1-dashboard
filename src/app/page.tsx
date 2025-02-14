import { getDrivers, getTeams } from '@/utilis/data-fetching'
import { Driver, Team } from '@/utilis/types'
import HomeView from '@/views/home-view'

export default async function Home() {
  const drivers = (await getDrivers()) as Driver[]
  const teams = (await getTeams()) as Team[]

  return <HomeView drivers={drivers} teams={teams} />
}
