export async function GET({ params }: { params: { year: string } }) {
  try {
    const res = await fetch(
      process.env.API_URL + '/meetings&year=' + params.year,
    )
    const races = await res.json()
    return new Response(JSON.stringify(races))
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    })
  }
}
