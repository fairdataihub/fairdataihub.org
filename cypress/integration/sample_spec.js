describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });
});

describe('My First Test', () => {
  it('Visits fairdata', () => {
    cy.visit('localhost:3000');
  });
});

describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('localhost:3000');

    cy.contains('Contact us');
  });
});

describe('My First Test', () => {
  it('clicks the link "Contact us"', () => {
    cy.visit('localhost:3000');

    cy.contains('Contact us').click();
  });
});

describe('My First Test', () => {
  it('clicking "Contact us" navigates to a new url', () => {
    cy.visit('localhost:3000');

    cy.contains('Contact us').click();

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/contact-us');
  });
});

describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('localhost:3000');

    cy.contains('Contact us').click();

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/contact-us');

    // Get an input, type into it and verify that the value has been updated
    cy.get('input:second')
      .type('fake@gmail.com')
      .should('have.value', 'fake@gmail.com');

    cy.get('input:first')
      .type('Testing name')
      .should('have.value', 'Testing name');
  });
});

// describe('My First Test', () => {
//   it('clicking "type" shows the right headings', () => {
//     cy.visit('https://example.cypress.io');

//     cy.pause();

//     cy.contains('type').click();

//     // Should be on a new URL which includes '/commands/actions'
//     cy.url().should('include', '/commands/actions');

//     // Get an input, type into it and verify that the value has been updated
//     cy.get('.action-email')
//       .type('fake@email.com')
//       .should('have.value', 'fake@email.com');
//   });
// });

describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000'); // change URL to match your dev URL
  });
});

describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });
});
