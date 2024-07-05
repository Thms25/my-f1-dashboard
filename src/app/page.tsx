import HomeView from '@/sections/home/home-view'
import { getDrivers } from '@/utils/fetch-utils/driver-fetch'
import { getRaces } from '@/utils/fetch-utils/races-fetch'
import { getStandings } from '@/utils/fetch-utils/standings-fetch'

export default async function Home() {
  const drivers = await getDrivers()
  const races = await getRaces('2024')

  const { driver_standings, team_standings } = await getStandings(
    races,
    drivers,
  )

  // console.log(standongs)
  return <HomeView drivers={drivers} races={races} />
}
