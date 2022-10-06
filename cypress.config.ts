import { defineConfig } from 'cypress';
import fs from 'fs';
import fm from 'front-matter';
import path from 'path';
// Cypress configuration options

interface returnObjectType {
  name: string;
  title: string;
  slug: string;
  subtitle: string;
}

interface FrontMatter {
  attributes: {
    title: string;
    slug: string;
    subtitle: string;
  };
}

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:3000`,
    supportFile: false,

    setupNodeEvents: (on, _config) => {
      on(`task`, {
        async projectRootFolder() {
          return new Promise((resolve, _reject) => {
            resolve(fs.realpathSync(__dirname));
          });
        },
        readFrontMatter(folderPath) {
          return new Promise((resolve, _reject) => {
            const combinePath = (rp: string, sp: string) => {
              return `${rp}${process.platform === `win32` ? `\\` : `/`}${sp}`;
            };

            const filesObj = fs.readdirSync(folderPath, {
              withFileTypes: true,
            });

            const filesArray: any = [];

            filesObj.forEach(async (item) => {
              const fileObject: returnObjectType = {
                name: item.name,
                title: ``,
                slug: ``,
                subtitle: ``,
              };

              const data = fs.readFileSync(
                combinePath(folderPath, item.name),
                `utf8`,
              );

              const content: FrontMatter = fm(data);

              fileObject.title = content.attributes.title;
              fileObject.slug = path.parse(item.name).name;
              fileObject.subtitle = content.attributes.subtitle;

              filesArray.push(fileObject);
            });

            resolve(filesArray);
          });
        },
      });
    },
  },
});
