describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the name in the banner', () => {
    cy.get('h1[id="banner"]').contains('pete beegle');
  });

  it('should render metadata', () => {
    cy.get('meta[name="description"]').should(
      'have.attr',
      'content',
      'i am a software developer'
    );
  });

  it('should render the dark-mode button', async () => {
    cy.get('button[id="toggleDarkMode"]').should('be.visible');
  });
});
