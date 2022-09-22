// import path from 'path';

//testing on the blog page
describe('Blog page', () => {
  it('Navigate to the blog page', () => {
    cy.visit('/');
    cy.contains('Blog').click();
    cy.url().should('include', '/blog');
  });

  //   it('read folder', () => {
  //     const folderPath = path.resolve(`../../blog`);
  //     console.log(folderPath);

  //     const res = cy.task(
  //       'readdirSync',
  //       { path: folderPath },
  //       { timeout: 30000 },
  //     );

  //     console.log(res);
  //   });

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
