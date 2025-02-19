import Container from '@/components/Container'
import DriversStandings from '@/components/tables/DriversStandings'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Driver, Team } from '@/utilis/types'

type DriversViewTypeProps = {
  drivers: Driver[]
  teams: Team[]
  season: string
}

export default function DriversView({
  drivers,
  teams,
  season,
}: DriversViewTypeProps) {
  return (
    <Container>
      <Card>
        <CardHeader>
          <CardTitle>World Drivers Championship</CardTitle>
          <CardDescription>{season} Season</CardDescription>
        </CardHeader>
        <CardContent>
          <DriversStandings drivers={drivers} teams={teams} />
        </CardContent>
      </Card>
    </Container>
  )
}
