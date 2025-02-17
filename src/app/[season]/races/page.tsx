import Container from '@/components/Container'
import { getRaces } from '@/utilis/data-fetching'
import { Race } from '@/utilis/types'
import RacesView from '@/views/races/races-view'

export default async function RacesPage({
  params,
}: {
  params: Promise<{ season: number }>
}) {
  const { season } = await params
  const races = (await getRaces(season)) as Race[]

  return <RacesView races={races} />
}
