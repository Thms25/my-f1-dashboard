import { JSDOM } from 'jsdom';

const url = 'https://www.formula1.com/en/teams.html';

// Function to fetch the HTML from the URL
const fetchHTML = async (url: string): Promise<string> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text();
    return data;
  } catch (error) {
    console.error(`Error fetching the HTML: ${(error as Error).message}`);
    return '';
  }
};

// Function to scrape the teams information
export const scrapeTeams = async (): Promise<
  { name: string; logo: string; car: string; link: string }[]
> => {
  const html = await fetchHTML(url);
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const teams: { name: string; logo: string; car: string; link: string }[] = [];

  document.querySelectorAll('.f1-driver-listing-card').forEach((element) => {
    const teamName = (element.querySelector('.f1-heading')?.textContent || '').trim();
    const teamLink = `https://www.formula1.com/en/teams/${teamName
      .toLowerCase()
      .replace(' ', '-')}`;

    const team_images = [];
    element.querySelectorAll('.f1-c-image').forEach((image) => {
      team_images.push(image.getAttribute('src'));
    });

    const teamLogo = team_images.find((image) => image.includes('logo.png')) || '';
    const carImage = team_images.find((image) => image.includes('_team_car_')) || '';

    teams.push({ name: teamName, logo: teamLogo, car: carImage, link: teamLink });
  });

  return teams;
};
