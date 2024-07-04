import HomeView from '@/sections/home/home-view'
import { getDrivers } from '@/utils/fetch-utils/driver-fetch'
import { getRaces } from '@/utils/fetch-utils/races-fetch'

export default async function Home() {
  const drivers = await getDrivers()
  const races = await getRaces('2024')

  return <HomeView drivers={drivers} races={races} />
}
