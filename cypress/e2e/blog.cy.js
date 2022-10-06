//testing on the blog page
describe('Blog page', () => {
  it('Navigate to the blog page', () => {
    cy.visit('/');
    cy.contains('Blog').click();
    cy.url().should('include', '/blog');
  });

  it('read folder', () => {
    cy.task('projectRootFolder').then((projectRootFolder) => {
      const blogFolder = `${projectRootFolder}${
        process.platform === `win32` ? `\\` : `/`
      }blog`;

      cy.task('readFrontMatter', blogFolder, { timeout: 30000 }).then(
        (files) => {
          files.forEach((file) => {
            cy.log(file);

            cy.wait(200);

            console.log(file);

            cy.contains(file.title);
            cy.contains(file.subtitle);
          });
        },
      );
    });
  });

  it('Navigate through each article', () => {
    cy.visit('/blog');

    //gather all blogs and go through each page
    cy.get('article').then((elem) => {
      cy.log(elem);

      for (const item of elem) {
        cy.wait(200);
        cy.get(item.children[1].children[3])
          .invoke('attr', 'href')
          .then((href) => {
            cy.log(href);
            cy.visit(href);
            // what do after visiting
            /*
                possible checks:
                Check blog content, check file source with nofs/fs
                */
            cy.wait(300);
          });

        //reset and return to blog page
        cy.visit('/blog');
        cy.wait(300);
      }
    });
  });
});
