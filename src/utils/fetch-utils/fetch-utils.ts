const MY_API =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api'
    : process.env.VERCEL_URL + '/api';

export async function getRaces(year: string) {
  try {
    const res = await fetch(MY_API + year + '/races');
    const races = await res.json();

    return races;
  } catch (error: any) {
    throw new Error('Failed to get races', error);
  }
}
export async function getStandings(year: string, table: string) {
  try {
    const tableName = table === 'drivers' ? 'driverStandings' : 'constructorStandings';
    const res = await fetch(MY_API + '/' + year + '/standings?table=' + tableName);
    const standings = await res.json();

    return standings;
  } catch (error: any) {
    throw new Error('Failed to get standings', error);
  }
}

export async function getDrivers() {
  try {
    const res = await fetch(MY_API + '/drivers');
    const drivers = await res.json();

    return drivers;
  } catch (error: any) {
    throw new Error('Failed to get drivers', error);
  }
}

export async function getDriver(code: string) {
  try {
    const res = await fetch(MY_API + '/drivers');
    const drivers = await res.json();

    return drivers.find((driver: any) => driver.code === code);
  } catch (error: any) {
    throw new Error('Failed to get drivers', error);
  }
}

export async function getTeams() {
  try {
    const res = await fetch(MY_API + '/teams');
    const teams = await res.json();

    return teams;
  } catch (error: any) {
    throw new Error('Failed to get drivers', error);
  }
}

export async function getTeam(team: string) {
  try {
    const res = await fetch(MY_API + '/teams');
    const teams = await res.json();

    return teams.find((t: any) => t.id === team);
  } catch (error: any) {
    throw new Error('Failed to get drivers', error);
  }
}
