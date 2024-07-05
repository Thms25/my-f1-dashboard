'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { format } from 'date-fns'
import Card from '@/components/layout/Card'

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
            <Card
              key={race.circuit_short_name}
              className="p-2 cursor-pointer"
              onClick={() => router.push(`/races/${race.country_code}`)}
              title={race.meeting_name}
              subtitle={race.country_name}
              image={race.flag}
            >
              <p className="text-sm">{format(race.date_start, 'dd MM yyy')}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-3xl">Driver Standings</h4>
        <div className="flex flex-col gap-2">
          {drivers.map((driver: any) => (
            <Card
              key={driver.driver_number}
              onClick={() => router.push(`/drivers/${driver.name_acronym}`)}
              title={driver.full_name}
              subtitle={driver.team_name}
              image={driver.headshot_url}
              className="p-2 m-4 border border-main rounded-md md:w-1/3 mx-auto"
            >
              <p className="text-sm">Race-Car number: {driver.driver_number}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
