//visits homepage
describe('Home page testing', () => {
  it('Visits homepage', () => {
    cy.visit('/');
  });

  it('Checks for swiper wrapper and marquee', () => {
    cy.get('[id^=swiper-wrapper]').scrollIntoView();
    for (let i = 0; i < 5; i++) {
      cy.get('.swiper-button-next').click();
      cy.wait(200);
    }
    cy.get('.marquee').should('have.css', 'animation');
  });

  it('Checks footer links', () => {
    cy.visit('/');
    cy.wait(200);

    cy.get('#fairdata-footer').scrollIntoView();
    //check links within the footer page

    cy.get('#footer-links-container')
      .children()
      .then((elem) => {
        // three footer containers holding links
        for (const item of elem) {
          //footer element containers
          cy.get(item.children[1]).then((element) => {
            element.children().each((_index, link) => {
              //a tag is found here
              cy.log(link.children[0]);
              cy.get(link.children[0])
                .invoke('attr', 'href')
                .then((href) => {
                  cy.log(href);
                  cy.visit(href);
                  cy.wait(200);
                });
            });
          });
        }
      });
  });
});
