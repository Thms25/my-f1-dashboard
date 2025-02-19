'use client'

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

type HomeViewTypeProps = {
  drivers: Driver[]
  teams: Team[]
}

export default function HomeView({ drivers, teams }: HomeViewTypeProps) {
  const year = new Date().getFullYear()
  return (
    <Container className="">
      <div className="w-full grid gap-4 grid-cols-1 lg:grid-cols-2">
        <Card className="">
          <CardHeader>
            <CardTitle>World Drivers Championship</CardTitle>
            <CardDescription>{year} Season</CardDescription>
          </CardHeader>
          <CardContent>
            <DriversStandings drivers={drivers} teams={teams} />
          </CardContent>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>World Constructors Championship</CardTitle>
            <CardDescription>{year} Season</CardDescription>
          </CardHeader>
          <CardContent>
            <TeamsStandings drivers={drivers} teams={teams} />
          </CardContent>
        </Card>
      </div>
    </Container>
  )
}
