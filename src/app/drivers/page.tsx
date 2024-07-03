import DriversView from '@/sections/drivers/drivers-view'
import { getDrivers } from '@/utils/fetch-utils/driver-fetch'

export default async function DriversPage() {
  const drivers = await getDrivers()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 px-24">
      <h1>Here are the current racing drivers in formula one</h1>
      {/* <section className="grid grid-cols-4 gap-3">
        {drivers.map((driver: any) => (
          <div
            key={driver.driver_number}
            className="p-2 m-4 border border-main rounded-md"
          >
            <div className="flex items-center gap-2">
              <Image
                src={driver.headshot_url || ''}
                alt={driver.full_name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <h2 className="text-sm">{driver.full_name}</h2>
            </div>
            <h4 className="text-sm mt-2">{driver.team_name}</h4>
            <p className="text-xs">Race-Car number: {driver.driver_number}</p>
          </div>
        ))}
      </section> */}
      <DriversView drivers={drivers} />
    </main>
  )
}
