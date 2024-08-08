import { scrapeDrivers } from '@/utils/api-utils/scrape-drivers';
import { getTeams } from '@/utils/fetch-utils/fetch-utils';
import { color } from '@mui/system';

function mergeDriversData(drivers_scraped: any, drivers_data: any, teams: any) {
  const drivers = drivers_data.map((driver: any) => {
    const scraped_driver = drivers_scraped.find((scraped_driver: any) =>
      scraped_driver.name.toLowerCase().includes(driver.last_name.toLowerCase())
    );
    const team = teams.find((team: any) =>
      driver.team_name.toLowerCase().includes(team.name.toLowerCase())
    );

    return {
      id: driver.id,
      name: driver.first_name + ' ' + driver.last_name,
      code: driver.name_acronym,
      image: driver.headshot_url,
      color: driver.team_colour,
      team: team?.name,
      car: team?.car,
      team_logo: team?.logo,
      team_id: team?.id,
      driver_number: driver.driver_number,
      country_code: driver.country_code,
      driver_picture: scraped_driver?.image,
      helmet: scraped_driver?.helmet,
      details: scraped_driver?.details,
    };
  });

  return drivers;
}

export async function GET(req: Request) {
  try {
    const drivers_scraped = await scrapeDrivers();

    const drivers_res = await fetch(`${process.env.F1_API}/drivers?session_key=latest`);
    const drivers_data = await drivers_res.json();

    const teams = await getTeams();

    const drivers = mergeDriversData(drivers_scraped, drivers_data, teams);

    return Response.json(drivers);
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}
