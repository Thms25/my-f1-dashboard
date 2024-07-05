import { getResultFromSession } from '../points-calculator'
import { getRaceSessions, getSessionStandings } from './races-fetch'

export async function getStandings(races: any[], drivers: any[]) {
  try {
    const drivers_results = {}
    for (const race of races) {
      const race_session = await getRaceSessions(
        race.meeting_key,
        race.year,
        'Race',
      )

      if (race_session.length === 0) return

      for (const session of race_session) {
        const race_standings = await getSessionStandings(
          session.session_key,
          session.meeting_key,
        )

        const race_result = getResultFromSession(race_standings, drivers)
        console.log(race_result)

        for (const result of race_result) {
          if (!drivers_results[result.driver_number]) {
            drivers_results[result.driver_number] = { ...result }
          } else {
            drivers_results[result.driver_number].points += result.points
          }
        }
      }
    }

    return drivers_results
  } catch (error: any) {
    throw new Error(error)
  }
}
