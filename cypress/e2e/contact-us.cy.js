//testing the contact us page
//Possible check: make sure background animation is happening
describe('Contact Us Page', () => {
  it('Navigate to contact us page and verify', () => {
    cy.visit('/');

    cy.contains('Contact us').click();

    cy.url().should('include', '/contact-us');
  });

  it('Test form in Contact us page', () => {
    cy.get('input[name="name"]')
      .type('Testing name')
      .should('have.value', 'Testing name');

    cy.get('input[name="email"]')
      .type('testing@gmail.com')
      .should('have.value', 'testing@gmail.com');

    cy.get('input[name="institution"]')
      .type('Test Inc.')
      .should('have.value', 'Test Inc.');

    cy.get('textarea[name="message"]')
      .type('This is a test for the contact page')
      .should('have.value', 'This is a test for the contact page');
  });
});
