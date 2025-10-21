Cypress.Commands.add('login', (username, password) => {
  cy.visit('/login');
  cy.get('#login-input').type(username);
  cy.get('#password-input').type(password, { log: false });
  cy.get('button[type="submit"]').click();
  cy.url().should('include', '/dashboard');
});