import { JSDOM } from 'jsdom';
import { fetchHTML } from './scrape-utils';

const url = 'https://www.formula1.com/en/teams.html';

// Function to scrape the teams information
export const scrapeTeams = async (): Promise<
  { name: string; logo: string; car: string; link: string; details: any }[]
> => {
  try {
    const html = await fetchHTML(url);
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const teams: { name: string; logo: string; car: string; link: string; details: any }[] = [];
    const teamCards = document.querySelectorAll('.f1-driver-listing-card');

    for (const element of teamCards) {
      const teamName = (element.querySelector('.f1-heading')?.textContent || '').trim();
      const teamLink = `https://www.formula1.com/en/teams/${teamName
        .toLowerCase()
        .replace(/ /g, '-')}`;

      const team_images = [];
      element.querySelectorAll('.f1-c-image').forEach((image: any) => {
        team_images.push(image.getAttribute('src'));
      });

      const teamLogo = team_images.find((image) => image.includes('logo.png')) || '';
      const carImage = team_images.find((image) => image.includes('_team_car_')) || '';

      const teamHtml = await fetchHTML(teamLink);
      const teamDom = new JSDOM(teamHtml);
      const teamDocument = teamDom.window.document;
      const teamDataElements = teamDocument.querySelector('.f1-dl');

      const keys = [];
      const values = [];
      teamDataElements.querySelectorAll('.f1-heading').forEach((heading: any) => {
        keys.push(heading.textContent.toLowerCase().replace(/ /g, '_'));
      });
      teamDataElements.querySelectorAll('.f1-text').forEach((heading: any) => {
        values.push(heading.textContent);
      });

      const team_info = {};
      keys.forEach((key, i) => {
        team_info[key] = values[i];
      });

      teams.push({
        name: teamName,
        logo: teamLogo,
        car: carImage,
        link: teamLink,
        details: team_info,
      });
    }

    return teams;
  } catch (error) {
    return [];
  }
};
