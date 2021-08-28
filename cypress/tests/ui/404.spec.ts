describe('404', () => {
  beforeEach(() => {
    cy.visit('/foo', { failOnStatusCode: false });
  });

  it('should navigate to the 404 page', () => {
    cy.get('title').contains('pete beegle | not found');
  });

  it('should go home', () => {
    cy.get('#home').click();
    cy.location('pathname').should('match', /\/$/);
  });
});
