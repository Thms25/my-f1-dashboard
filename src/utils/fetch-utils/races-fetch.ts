import { races_24 } from '@/utils/data/fake-data';
import { countries, getFlag } from '../data/countries';
import { race_calendar_24 } from '../data/race-calendar';

const MY_API =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api'
    : process.env.VERCEL_URL + '/api';

export async function getRaces(year: string) {
  try {
    const res = await fetch(process.env.F1_API + '/meetings?year=' + year);
    const past_races = await res.json();

    const upcoming_races = race_calendar_24.filter((race) => {
      const found_race = past_races.find(
        (past_race: any) => past_race.meeting_name === race.meeting_name
      );

      if (!found_race) {
        return race;
      }
    });

    const all_races = [...past_races, ...upcoming_races];

    all_races.forEach((race: any) => {
      race.flag = getFlag(race.country_name);
      const completed_race = past_races.find(
        (past_race: any) => race.meeting_name === past_race.meeting_name
      );

      race.completed = !!completed_race;
    });

    return all_races;
  } catch (error: any) {
    console.error(error);
    return races_24;
  }
}

export async function getRace(code: string, year: string = '2024') {
  try {
    const res = await fetch(`${process.env.F1_API}/meetings?year=${year}&country_code=${code}`);

    let race_data = await res.json();
    if (race_data.length === 0) {
      const res_two = await fetch(
        `${process.env.F1_API}/meetings?year=${+year - 1}&country_code=${code}`
      );
      race_data = await res_two.json();
    }

    const flag = getFlag(race_data[0].country_name);

    return { ...race_data[0], flag: flag };
  } catch (error) {
    // throw new Error(error)
    throw new Error("Failed to fetch this race's data");
    const race = race_calendar_24.find((race) => race.country_code === code);
    return race;
  }
}

export async function getRaceSessions(key: string, year: string = '2024', type?: string) {
  try {
    const res = await fetch(
      `${process.env.F1_API}/sessions?meeting_key=${key}&year=${year}${
        type ? `&session_name=${type}` : ''
      }`
    );
    const sessions = await res.json();
    return sessions;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getSessionStandings(session_key: string, meeting_key: string) {
  try {
    const res = await fetch(
      `${process.env.F1_API}/position?session_key=${session_key}&meeting_key=${meeting_key}`
    );
    const standings = await res.json();

    const stadingsByDriver = standings.reduce((acc: any, standing: any) => {
      const driverNumber = standing.driver_number;
      if (!acc[driverNumber]) {
        acc[driverNumber] = [];
      }
      acc[driverNumber].push(standing);
      return acc;
    }, {});

    return stadingsByDriver;
  } catch (error) {
    console.error(error);
    return [];
  }
}
