'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { format } from 'date-fns'

type DriversViewProps = {
  drivers: any[]
  races: any[]
}

export default function HomeView({ drivers, races }: DriversViewProps) {
  const router = useRouter()
  return (
    <section className="grid grid-cols-2 gap-4 p-24">
      <div className="flex flex-col gap-2">
        {races.map((race: any) => (
          <div key={race.circuit_key} className="p-2 m-4 ">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => router.push(`/races/${race.meeting_code}`)}
            >
              <Image
                src={race.flag}
                alt={race.meeting_name}
                width={50}
                height={50}
                className=""
              />
              <h2 className="text-sm">{race.meeting_name}</h2>
            </div>
            <p className="text-xs">{format(race.date_start, 'dd MM yyy')}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
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
      </div>
    </section>
  )
}
