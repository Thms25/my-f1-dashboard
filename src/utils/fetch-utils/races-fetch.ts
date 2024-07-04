import { races_24 } from '@/utils/data/fake-data'
import { countries, getFlag } from '../data/countries'
import { race_calendar_24 } from '../data/race-calendar'

export async function getRaces(year: string) {
  try {
    const res = await fetch(process.env.F1_API + '/meetings?year=' + year)
    const past_races = await res.json()

    const all_races = race_calendar_24
    all_races.forEach((race: any) => {
      race.flag = getFlag(race.country_name)
      const completed_race = past_races.find(
        (past_race: any) => race.meeting_name === past_race.meeting_name,
      )
      race.completed = !!completed_race
    })

    past_races.forEach((race: any) => {
      race.flag = getFlag(race.country_name)
    })

    return all_races
  } catch (error: any) {
    console.error(error)
    return races_24
  }
}

export async function getRace(code: string, year: string) {
  try {
    const res = await fetch(
      `${process.env.F1_API}/meetings?year=${year}&country_code=${code}`,
    )

    const race_data = await res.json()

    const flag = getFlag(race_data[0].country_name)

    return { ...race_data[0], flag: flag }
  } catch (error) {
    const race = race_calendar_24.find(race => race.country_code === code)
    return race
    // throw new Error("Failed to fetch this race's data")
  }
}

export async function getRaceSessions(key: string, year: string = '2024') {
  try {
    const res = await fetch(
      `${process.env.F1_API}/sessions?meeting_key=${key}&year=${year}`,
    )
    const sessions = await res.json()
    return sessions
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function getSessionStandings(
  session_key: string,
  meeting_key: string,
) {
  try {
    const res = await fetch(
      `${process.env.F1_API}/position?session_key=${session_key}&meeting_key=${meeting_key}`,
    )
    const standings = await res.json()
    return standings
  } catch (error) {
    console.error(error)
    return []
  }
}
