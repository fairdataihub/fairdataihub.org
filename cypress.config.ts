import { defineConfig } from 'cypress';
import fs from 'fs';
import fm from 'front-matter';
// Cypress configuration options

interface returnObjectType {
  name: string;
  title: string;
}

interface FrontMatter {
  attributes: {
    title: string;
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
        readFrontMatter(path) {
          return new Promise((resolve, _reject) => {
            const combinePath = (rp: string, sp: string) => {
              return `${rp}${process.platform === `win32` ? `\\` : `/`}${sp}`;
            };

            const filesObj = fs.readdirSync(path, {
              withFileTypes: true,
            });

            const filesArray: any = [];

            filesObj.forEach((item) => {
              const fileObject: returnObjectType = {
                name: item.name,
                title: ``,
              };

              fs.readFile(
                combinePath(path, item.name),
                `utf8`,
                function (err, data) {
                  if (err) throw err;

                  const content: FrontMatter = fm(data);

                  fileObject.title = content.attributes.title;
                },
              );

              console.log(fileObject);

              filesArray.push(fileObject);
            });

            resolve(filesArray);
          });
        },
      });
    },
  },
});
