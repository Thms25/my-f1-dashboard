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

type HomeViewTypeProps = {
  drivers: Driver[]
  teams: Team[]
}

export default function HomeView({ drivers, teams }: HomeViewTypeProps) {
  const year = new Date().getFullYear()
  return (
    <Container>
      <Card>
        <CardHeader>
          <CardTitle>Driver Standing</CardTitle>
          <CardDescription>{year} Season</CardDescription>
        </CardHeader>
        <CardContent>
          <DriversStandings drivers={drivers} teams={teams} />
        </CardContent>
      </Card>
    </Container>
  )
}
