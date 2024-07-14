export async function GET(req: Request) {
  try {
    const drivers_res = await fetch(`${process.env.F1_API}/drivers?session_key=latest`);
    const drivers = await drivers_res.json();

    return Response.json(drivers);
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}
