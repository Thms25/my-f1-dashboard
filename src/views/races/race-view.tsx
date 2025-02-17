import BreadCrumb from '@/components/Breadcrumb'
import Container from '@/components/Container'
import ResultsTable from '@/components/tables/ResultsTable'
import { paths } from '@/utilis/paths'

import { Race } from '@/utilis/types'

type RacesViewProps = {
  race: Race
  season: string
}

export default function RaceView({ race, season }: RacesViewProps) {
  return (
    <Container>
      <BreadCrumb
        items={[
          { name: season },
          { name: 'races', href: paths.races.root(season) },
          { name: 'round ' + race.round },
        ]}
      />
      <ResultsTable results={race.results} title={race.name + ' Results'} />
    </Container>
  )
}
