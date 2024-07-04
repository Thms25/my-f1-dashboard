import Card from '@/components/layout/Card'
import Container from '@/components/layout/Container'
import {
  getRace,
  getRaceSessions,
  getSessionStandings,
} from '@/utils/fetch-utils/races-fetch'
import { format } from 'date-fns'

export default async function RacePage({ params }: { params: { id: string } }) {
  const race = await getRace(params.id, '2024')
  const sessions = await getRaceSessions(race.meeting_key, race.year)
  const race_session = sessions.find(
    (session: any) => session.session_type === 'Race',
  )
  const quali_session = sessions.find(
    (session: any) => session.session_type === 'Qualifying',
  )
  const race_standings = await getSessionStandings(
    race_session.session_key,
    race_session.meeting_key,
  )
  const quali_standings = await getSessionStandings(
    quali_session.session_key,
    quali_session.meeting_key,
  )
  console.log(quali_standings)
  return (
    <Container>
      <div className="p-24">
        <Card
          title={race.meeting_name}
          subtitle={race.country_name}
          image={race.flag}
          className="w-full md:w-1/2 lg:w-1/2 mx-auto"
        >
          <p className="text-sm">{format(race.date_start, 'dd MM yyy')}</p>
        </Card>
      </div>
    </Container>
  )
}
