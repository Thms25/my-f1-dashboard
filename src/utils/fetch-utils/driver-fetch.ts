import { backup_drivers } from '@/utils/data/fake-data'

export async function getDrivers() {
  try {
    const drivers_res = await fetch(
      `${process.env.F1_API}/drivers?session_key=latest`,
    )
    const drivers = await drivers_res.json()
    return drivers
  } catch (error) {
    return backup_drivers
    // throw new Error('Failed to fetch drivers')
  }
}

export async function getDriver(name: string) {
  try {
    const drivers_res = await fetch(
      `${process.env.F1_API}/drivers?session_key=latest&name_acronym=${name}`,
    )
    const drivers = await drivers_res.json()
    return drivers[0]
  } catch (error) {
    throw new Error('Failed to fetch this driver')
  }
}
