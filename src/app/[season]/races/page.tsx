import Container from '@/components/Container'
import { getRaces } from '@/utilis/data-fetching'

export default async function RacesPage({
  params,
}: {
  params: Promise<{ season: number }>
}) {
  const { season } = await params
  const races = await getRaces(season)
  console.log(races)

  return (
    <Container className="p-8">
      <h1 className="text-2xl">Races Page for season {season}</h1>
      <div className="grid grid-cols-1 gap-4 my-4">
        {races.map((race: any) => (
          <div key={race.RoundNumber}>{race.EventName}</div>
        ))}
      </div>
    </Container>
  )
}
