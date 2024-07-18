export async function GET(req: Request) {
  try {
    const drivers_res = await fetch(`${process.env.F1_API}/drivers?session_key=latest`);
    const drivers_data = await drivers_res.json();

    const drivers = drivers_data.map((driver) => {
      return {
        id: driver.id,
        name: driver.first_name + ' ' + driver.last_name,
        code: driver.name_acronym,
        image: driver.headshot_url,
        team: driver.team_name,
        driver_number: driver.driver_number,
        country_code: driver.country_code,
      };
    });

    return Response.json(drivers);
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}
