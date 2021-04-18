import { Response, Router } from 'express';
import crypto from 'crypto';
import puppeteer from 'puppeteer';

interface IResult {
  name: string;
  description: string;
  price?: number;
  pictures: number;
  available: boolean;
}

const dataRouter = Router();

dataRouter.get(
  '/',
  async (request, response): Promise<Response> => {
    const {
      links,
      titleRequest,
      descriptionRequest,
      priceRequest,
      imageRequest,
    } = request.query;

    const linksFormatted = links as Array<string>;

    const consultLinks = linksFormatted.map(
      async (link): Promise<IResult> => {
        const fileName = crypto.randomBytes(10).toString('hex');
        const viewPort = { width: 1920, height: 1080 };
        const options = {
          path: `./src/images/${fileName}.jpeg`,
          fullPage: true,
        };

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setViewport(viewPort);
        await page.goto(String(link));
        await page.screenshot(options);

        const [el1] = await page.$x(`${titleRequest}`);
        const txt1 = el1 ? await el1.getProperty('textContent') : '';
        const title = txt1 ? ((await txt1.jsonValue()) as string) : '';

        const [el2] = await page.$x(`${descriptionRequest}`);
        const txt2 = el2 ? await el2.getProperty('textContent') : '';
        const description = txt2 ? ((await txt2.jsonValue()) as string) : '';

        const [el3] = await page.$x(`${priceRequest}`);
        const txt3 = el3 ? await el3.getProperty('textContent') : '';
        const price = txt3 ? ((await txt3.jsonValue()) as string) : '';

        const countImages = await page.$$eval(
          `${imageRequest}`,
          ele => ele.length,
        );

        const nameTreated = String(title).replace(/(\r\n|\n|\r)/gm, '');

        const descriptionTreated = description.replace(/(\r\n|\n|\r)/gm, '');

        const priceTreated = price.replace(/(\r\n|\n|\r)/gm, '');

        const linkSliced = String(link).slice(12, 18);

        const priceTreatedSite = linkSliced.includes('amazon')
          ? priceTreated.replace(/([$])/gm, '')
          : priceTreated.replace(/([.])/gm, '');

        const priceTreatedSiteNumber = Number.parseFloat(priceTreatedSite);

        await browser.close();

        const data: IResult = {
          name: nameTreated,
          description: descriptionTreated,
          price: priceTreatedSiteNumber,
          pictures: countImages,
          available: !!priceTreated,
        };
        return data;
      },
    );

    const dataFormatted = await Promise.all(consultLinks);

    return response.json(dataFormatted);
  },
);

export default dataRouter;
