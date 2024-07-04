import { races_24 } from '@/utils/data/fake-data'
import { countries } from '../data/countries'

export async function getRaces(year: string) {
  try {
    const res = await fetch(process.env.F1_API + '/meetings?year=' + year)
    const races = await res.json()

    races.forEach((race: any) => {
      const country = countries.find(
        country => country.country === race.country_name,
      )
      race.flag = country?.flag || ''
    })

    return races
  } catch (error: any) {
    console.error(error)
    return races_24
  }
}

// export async function getDriver(name: string) {
//   try {
//     const drivers_res = await fetch(
//       `${process.env.F1_API}/drivers?session_key=latest&name_acronym=${name}`,
//     )
//     const drivers = await drivers_res.json()
//     return drivers[0]
//   } catch (error) {
//     throw new Error('Failed to fetch this driver')
//   }
// }
