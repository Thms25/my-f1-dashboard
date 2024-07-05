import Table from '@/components/charts/Table'
import Card from '@/components/layout/Card'
import Container from '@/components/layout/Container'
import { format } from 'date-fns'
import Image from 'next/image'

type RaceViewProps = {
  race: any
  result: any[]
}

export default function RaceView({ race, result }: RaceViewProps) {
  const resultRows = result.map((driver: any) => {
    return {
      image: driver.headshot_url,
      driver: driver.full_name,
      position: driver.raceResult,
      points: driver.points,
    }
  })
  return (
    <Container>
      <div className="mb-8">
        <Card
          title={race.meeting_name}
          subtitle={race.country_name}
          image={race.flag}
          className="w-full md:w-1/2 lg:w-1/3 mx-auto p-4"
        >
          <p className="text-sm">{format(race.date_start, 'dd MM yyy')}</p>
        </Card>
      </div>

      <div className="text-center mx-auto px-12 grid grid-cols-3 gap-2">
        <div className=""></div>
        <Table rows={resultRows} title="Race Result" />
        <div className=""></div>
      </div>
    </Container>
  )
}
