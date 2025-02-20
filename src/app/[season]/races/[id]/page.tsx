import { getDrivers, getRace } from '@/utilis/data-fetching'
import RaceView from '@/views/races/race-view'

export default async function RacePage({
  params,
}: {
  params: Promise<{ id: number; season: string }>
}) {
  const { id, season } = await params
  const race = await getRace(id, season)
  // const drivers = await getDrivers()

  return <RaceView race={race} season={season} />
}
