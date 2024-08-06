import { scrapeDrivers } from '@/utils/api-utils/scrape-drivers';

function mergeDriversData(drivers_scraped: any, drivers_data: any) {
  const drivers = drivers_data.map((driver: any) => {
    const scraped_driver = drivers_scraped.find((scraped_driver: any) =>
      scraped_driver.name.toLowerCase().includes(driver.last_name.toLowerCase())
    );

    return {
      id: driver.id,
      name: driver.first_name + ' ' + driver.last_name,
      code: driver.name_acronym,
      image: driver.headshot_url,
      team: driver.team_name,
      driver_number: driver.driver_number,
      country_code: driver.country_code,
      driverPicture: scraped_driver?.image,
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

    // const drivers = drivers_data.map((driver) => {
    //   return {
    //     id: driver.name_acronym,
    //     name: driver.first_name + ' ' + driver.last_name,
    //     code: driver.name_acronym,
    //     image: driver.headshot_url,
    //     team: driver.team_name,
    //     driver_number: driver.driver_number,
    //     country_code: driver.country_code,
    //   };
    // });

    const drivers = mergeDriversData(drivers_scraped, drivers_data);

    return Response.json(drivers);
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}
