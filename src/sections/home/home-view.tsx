'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { format } from 'date-fns'

type DriversViewProps = {
  drivers: any[]
  races: any[]
}

export default function HomeView({ drivers, races }: DriversViewProps) {
  const past_races = races.filter((race: any) => race.completed)
  const upcoming_races = races.filter((race: any) => !race.completed)
  const router = useRouter()
  return (
    <section className="flex flex-col gap-4 p-20 text-center">
      <div className="flex flex-col gap-2">
        <h4 className="text-3xl">Upcoming Races</h4>
        <div className="flex flex-col md:flex-row  items-center justify-evenly gap-2">
          {upcoming_races.slice(0, 3).map((race: any) => (
            <div
              key={race.circuit_short_name}
              className="p-2 cursor-pointer"
              onClick={() => router.push(`/races/${race.country_code}`)}
            >
              <h2 className="text-sm">{race.meeting_name}</h2>
              <div className="flex items-end justify-between gap-2">
                <Image
                  src={race.flag}
                  alt={race.meeting_name}
                  width={40}
                  height={40}
                  className=""
                />
                <p className="text-sm">
                  {format(race.date_start, 'dd MM yyy')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h4>Driver Standings</h4>
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
      </div>
    </section>
  )
}
