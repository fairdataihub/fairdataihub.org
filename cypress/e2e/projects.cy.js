// testing all project pages
/*
Possible checks:
Test team icons on webpage, check if any animations are playing
*/
describe('Our projects pages', () => {
  it('Navigate to SODA for SPARC page', () => {
    cy.visit('/');

    cy.get('#project-container').invoke('show');
    cy.get('#soda-page').click();

    cy.wait(200);

    cy.url().should('include', '/sodaforsparc');
  });

  it('Navigate to FAIRshare page', () => {
    cy.visit('/');

    cy.get('#project-container').invoke('show');
    cy.get('#fairshare-page').click();

    cy.wait(200);

    cy.url().should('include', '/fairshare');
  });

  it('Nagivate to the KnowMore page', () => {
    cy.visit('/');

    cy.get('#project-container').invoke('show');
    cy.get('#knowmore-page').click();

    cy.wait(200);

    cy.url().should('include', '/knowmore');
  });

  it('Navigate to the SPARClink page', () => {
    cy.visit('/');

    cy.get('#project-container').invoke('show');
    cy.get('#sparclink-page').click();

    cy.wait(200);

    cy.url().should('include', '/sparclink');
  });

  it('Navigate to the AQUA page', () => {
    cy.visit('/');

    cy.get('#project-container').invoke('show');
    cy.get('#aqua-page').click();

    cy.wait(200);

    cy.url().should('include', '/aqua');
  });
});
