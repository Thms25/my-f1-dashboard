import { JSDOM } from 'jsdom';
import { fetchHTML } from './scrape-utils';

const url = 'https://www.formula1.com/en/drivers.html';

// Function to scrape the teams information
export const scrapeDrivers = async (): Promise<
  { name: string; image: string; helmet: string; link: string; details: any }[]
> => {
  try {
    const html = await fetchHTML(url);
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const drivers: { name: string; image: string; helmet: string; link: string; details: any }[] =
      [];
    const driverCards = document.querySelectorAll('.f1-driver-listing-card');

    if (driverCards) {
      for (const element of driverCards) {
        // driverCards.forEach(async (element: any) => {
        const names = [];
        element.querySelectorAll('.f1-driver-name').forEach((name: any) => {
          name.querySelectorAll('p').forEach((p: any) => names.push(p.textContent));
        });

        const full_name =
          names[0] !== 'Zhou' ? names[0] + ' ' + names[1] : names[1] + ' ' + names[0] || '';

        const driverLink = `https://www.formula1.com/en/drivers/${full_name
          .replace(/ /g, '-')
          .toLowerCase()}.html`;
        const driverHTML = await fetchHTML(driverLink);
        const driverDOM = new JSDOM(driverHTML);
        const driverDocument = driverDOM.window.document;

        const driverBio = driverDocument.querySelector('.f1-atomic-wysiwyg')?.textContent;

        const driverPictures = driverDocument.querySelectorAll('.f1-c-image');

        const driverPic = driverPictures[0]?.src;
        const driverHelmet = driverPictures[1]?.src;

        const driverDataElements = driverDocument.querySelector('.f1-dl');
        const keys = [];
        const values = [];

        if (driverDataElements) {
          driverDataElements.querySelectorAll('.f1-heading')?.forEach((heading: any) => {
            keys.push(heading.textContent.toLowerCase().replace(/ /g, '_'));
          });
          driverDataElements.querySelectorAll('.f1-text')?.forEach((heading: any) => {
            values.push(heading.textContent);
          });
        }

        const driver_info = {
          bio: driverBio,
        };
        keys?.forEach((key, i) => {
          driver_info[key] = values[i];
        });

        const driver = {
          name: full_name,
          image: driverPic,
          helmet: driverHelmet,
          link: driverLink,
          details: driver_info,
        };

        drivers.push(driver);
      }
    }

    return drivers;
  } catch (error) {
    return [];
  }
};
