import { NextRequest } from 'next/server'
import { backup_drivers } from '@/utils/data/fake-data'

export async function GET(request: NextRequest) {
  try {
    const drivers_rea = await fetch(
      `${process.env.F1_API}/drivers?session_key=latest`,
    )
    const drivers = await drivers_rea.json()
    return new Response(JSON.stringify(drivers), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 200,
    })
  } catch (error) {
    console.error('Failed to fetch drivers', error)
    return new Response(JSON.stringify(backup_drivers), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
