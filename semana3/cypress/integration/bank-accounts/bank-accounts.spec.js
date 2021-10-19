/// <reference types="Cypress" />

describe('Bank Accounts', () => {
  beforeEach(() => {
    cy.intercept('POST', '/login').as('login');
    cy.intercept('POST', '/graphql', (req) => {
      if (req.body.operationName === 'ListBankAccount') {
        req.reply({ fixture: 'bank-accounts.json' });
      }
    });
    cy.visit('/');
    cy.get('#username').type(Cypress.env('margarettaUser'));
    cy.get('#password').type(Cypress.env('margarettaPassword'));
    cy.get('[data-test="signin-submit"]').click();
    cy.wait('@login');
  });

  it('should show bank accounts', () => {
    cy.visit('/bankaccounts');
  });
});
