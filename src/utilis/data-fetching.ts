const YEAR = new Date().getFullYear()
const MY_API = process.env.PITSTAT_API

export async function getDrivers(season: number = YEAR) {
  try {
    const response = await fetch(`${MY_API}/drivers`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch {
    console.error('Error fetching data')
    return []
  }
}
