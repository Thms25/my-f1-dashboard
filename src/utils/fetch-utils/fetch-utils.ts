import { races_24 } from '@/utils/data/fake-data';

const MY_API = process.env.MY_API;

export async function getRaces(year: string) {
  try {
    const res = await fetch(process.env.MY_API + year + '/races');
    const races = await res.json();

    return races;
  } catch (error: any) {
    throw new Error('Failed to get races', error);
  }
}
export async function getStandings(year: string, table: string) {
  const tableName = table === 'drivers' ? 'driverStandings' : 'constructorStandings';
  try {
    const res = await fetch(process.env.MY_API + '/' + year + '/standings?table=' + tableName);
    const standings = await res.json();

    return tableName === 'driverStandings'
      ? standings.DriverStandings
      : standings.ConstructorStandings;
  } catch (error: any) {
    throw new Error('Failed to get standings', error);
  }
}
