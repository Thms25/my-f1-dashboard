import Container from '@/components/Container'
import RacesTable from '@/components/tables/RacesTable'
import { Race } from '@/utilis/types'

type RacesViewProps = {
  races: Race[]
}

export default function RacesView({ races }: RacesViewProps) {
  return (
    <Container>
      <RacesTable races={races} />
    </Container>
  )
}
