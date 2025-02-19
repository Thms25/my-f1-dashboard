import Container from '@/components/Container'
import DriversStandings from '@/components/tables/DriversStandings'
import TeamsStandings from '@/components/tables/TeamsStandings'
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
  teams: Team[]
  drivers: Driver[]
  season: string
}

export default function TeamsView({
  teams,
  drivers,
  season,
}: DriversViewTypeProps) {
  return (
    <Container>
      <Card>
        <CardHeader>
          <CardTitle>World Constructors Championship</CardTitle>
          <CardDescription>{season} Season</CardDescription>
        </CardHeader>
        <CardContent>
          <TeamsStandings teams={teams} drivers={drivers} />
        </CardContent>
      </Card>
    </Container>
  )
}
