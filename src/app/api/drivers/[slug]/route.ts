import { NextRequest } from 'next/server'

export async function GET(request: NextRequest, { slug }: { slug: string }) {
  try {
    const drivers_rea = await fetch(
      `${process.env.F1_API}/drivers?session_key=latest&name_acronym=${slug}`,
    )
    const driver = await drivers_rea.json()

    return new Response(JSON.stringify(driver[0]), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 200,
    })
  } catch (error) {
    console.error('Failed to fetch drivers', error)
    return new Response(JSON.stringify({}), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
