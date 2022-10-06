//testing on the team page
/**
 * Possible check:
 * check if images have loaded
 */
describe('Meet the Team page', () => {
  it('Navigate to the team page', () => {
    cy.visit('/');

    cy.contains('Meet The Team').click();

    cy.url().should('include', '/team');
    //check images have loaded
  });
});
