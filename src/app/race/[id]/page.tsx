// sections
import RaceView from '@/sections/race/race-view';
import { getDrivers } from '@/utils/fetch-utils/driver-fetch';
import { getRace, getRaceSessions, getSessionStandings } from '@/utils/fetch-utils/races-fetch';
import { getResultFromSession } from '@/utils/points-calculator';

// ----------------------------------------------------------------------

export default async function UserProfilePage({ params }) {
  const race = await getRace(params.id);
  const drivers = await getDrivers();
  const sessions = await getRaceSessions(race.meeting_key, race.year);
  const race_session = sessions.find((session: any) => session.session_type === 'Race');
  // const quali_session = sessions.find(
  //   (session: any) => session.session_type === 'Qualifying',
  // )
  const race_standings = await getSessionStandings(
    race_session.session_key,
    race_session.meeting_key
  );
  // const quali_standings = await getSessionStandings(
  //   quali_session.session_key,
  //   quali_session.meeting_key,
  // )

  const raceResult = getResultFromSession(race_standings, drivers);

  raceResult.sort((a, b) => a.raceResult - b.raceResult);
  return <RaceView race={race} result={raceResult} />;
}
