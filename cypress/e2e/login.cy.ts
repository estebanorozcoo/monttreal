describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/auth/login');
  });

  it('should display login form', () => {
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('should show validation errors for empty form', () => {
    cy.get('button[type="submit"]').click();
    // Form validation should prevent submission
    cy.url().should('include', '/auth/login');
  });

  it('should show validation error for invalid email', () => {
    cy.get('input[type="email"]').type('invalid-email');
    cy.get('input[type="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    // Should stay on login page due to validation
    cy.url().should('include', '/auth/login');
  });

  it('should have Google login button', () => {
    cy.contains('Google').should('be.visible');
  });

  it('should have link to register page', () => {
    cy.contains('Crear Cuenta').click();
    cy.url().should('include', '/auth/register');
  });
});

