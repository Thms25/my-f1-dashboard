import { getResultFromSession } from '../points-calculator';
import { getRaceSessions, getSessionStandings } from './races-fetch';

type DriverResult = {
  driver_number: number;
  points: number;
  position: number;
  session_key: number;
  meeting_key: number;
  broadcast_name: string;
  country_code: string;
  first_name: string;
  full_name: string;
  headshot_url: string;
  last_name: string;
  team_colour: string;
  team_name: string;
  name_acronym: string;
  raceResult: number;
  startingPosition: number;
};
export async function getStandings(races: any[], drivers: any[]) {
  try {
    const drivers_results: Record<number, DriverResult> = {};
    for (const race of races) {
      const race_session = await getRaceSessions(race.meeting_key, race.year, 'Race');

      if (race_session.length === 0) continue;

      for (const session of race_session) {
        const race_standings = await getSessionStandings(session.session_key, session.meeting_key);

        const race_result = getResultFromSession(race_standings, drivers) as DriverResult[];

        for (const result of race_result) {
          if (!result.driver_number) continue;
          if (!drivers_results[result.driver_number]) {
            drivers_results[result.driver_number] = { ...result };
          } else {
            drivers_results[result.driver_number].points += result.points;
          }
        }
      }
    }

    const driver_standings = Object.values(drivers_results)
      .map((driverData) => {
        return {
          ...driverData,
        };
      })
      .sort((a, b) => b.points - a.points);

    const team_standings = [];

    driver_standings.forEach((driver: any) => {
      const team = team_standings.find((team: any) => team.team_name === driver.team_name);
      if (team) {
        team.points += driver.points;
      } else {
        team_standings.push({
          team_name: driver.team_name,
          team_colour: driver.team_colour,
          points: driver.points,
        });
      }
    });

    return { driver_standings, team_standings };
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
}
