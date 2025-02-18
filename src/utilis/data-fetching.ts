'use server'

const YEAR = new Date().getFullYear()
const MY_API = process.env.PITSTAT_API

export async function getDrivers(season: number = YEAR) {
  try {
    const response = await fetch(`${MY_API}/drivers`, {
      next: {
        revalidate: 3600,
      },
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data: ', error)
    return []
  }
}

export async function getTeams(season: number = YEAR) {
  try {
    const response = await fetch(`${MY_API}/teams`, {
      next: {
        revalidate: 3600,
      },
    })
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
export async function getRaces(season: number = YEAR) {
  try {
    const response = await fetch(`${MY_API}/races?year=${season}`, {
      next: {
        revalidate: 3600,
      },
    })
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

export async function getRace(round: number, season: number = YEAR) {
  try {
    const response = await fetch(`${MY_API}/races/${round}?year=${season}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch {
    console.error('Error fetching data')
    return {}
  }
}
