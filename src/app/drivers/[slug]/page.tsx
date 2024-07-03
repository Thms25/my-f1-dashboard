import { getDriver } from '@/utils/fetch-utils/driver-fetch'
import Image from 'next/image'

export default async function DriverPage({
  params,
}: {
  params: { slug: string }
}) {
  const driver = await getDriver(params.slug)
  return (
    <section className="p-24">
      <div className="">
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
    </section>
  )
}
