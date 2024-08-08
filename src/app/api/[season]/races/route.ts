export async function GET(req: Request, { params }: { params: { season: string } }) {
  try {
    const res = await fetch(`${process.env.ERGAST_API}/${params.season}.json`);
    const data = await res.json();
    const races = data.MRData.RaceTable.Races;

    return Response.json(races);
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}
