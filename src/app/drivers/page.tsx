import DriversView from '@/sections/drivers/drivers-view'
import { getDrivers } from '@/utils/fetch-utils/driver-fetch'

export default async function DriversPage() {
  const drivers = await getDrivers()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 px-24">
      <h1>Here are the current racing drivers in formula one</h1>
      <DriversView drivers={drivers} />
    </main>
  )
}
