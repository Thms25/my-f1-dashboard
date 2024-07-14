export async function GET(req: Request, { params }: { params: { season: string } }) {
  const { searchParams } = new URL(req.url);
  const table = searchParams.get('table');
  try {
    const res = await fetch(`${process.env.ERGAST_API}/${params.season}/${table}.json`);
    const data = await res.json();
    const standings = data.MRData.StandingsTable.StandingsLists[0];

    return Response.json(standings, {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}
