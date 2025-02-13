import { getDrivers } from '@/utilis/data-fetching'
import { Driver } from '@/utilis/types'
import HomeView from '@/views/home-view'

export default async function Home() {
  const drivers = (await getDrivers()) as Driver[]

  return <HomeView drivers={drivers} />
}
