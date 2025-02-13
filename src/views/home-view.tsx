import Container from '@/components/Container'
import { DriversStandings } from '@/components/tables/DriversStandings'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Driver } from '@/utilis/types'

type HomeViewTypeProps = {
  drivers: Driver[]
}

export default function HomeView({ drivers }: HomeViewTypeProps) {
  const year = new Date().getFullYear()
  return (
    <Container>
      <Card>
        <CardHeader>
          <CardTitle>{year} F1 season</CardTitle>
          <CardDescription>Season data overview</CardDescription>
        </CardHeader>
        <CardContent>
          <DriversStandings drivers={drivers} />
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </Container>
  )
}
