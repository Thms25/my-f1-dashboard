'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

type DriversViewProps = {
  drivers: any[]
}

export default function DriversView({ drivers }: DriversViewProps) {
  const router = useRouter()
  return (
    <section className="grid grid-cols-4 gap-3">
      {drivers.map((driver: any) => (
        <div
          key={driver.driver_number}
          className="p-2 m-4 border border-main rounded-md"
        >
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => router.push(`/drivers/${driver.name_acronym}`)}
          >
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
    </section>
  )
}
