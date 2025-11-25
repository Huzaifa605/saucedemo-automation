/// <reference types="cypress" />
import SaucePage from '../support/Pages/SaucePage'

describe('Login Tests', () => {

  it('Valid login redirects to inventory', () => {
    cy.fixture('user').then((user) => {
      SaucePage.visitLogin();
      SaucePage.login(user.validUser.username, user.validUser.password);
      cy.url().should('include','/inventory.html');
      SaucePage.inventoryContainer().should('be.visible');
    });
  });

  it('Locked out user sees error', () => {
    cy.fixture('user').then((user) => {
      SaucePage.visitLogin();
      SaucePage.login(user.lockedUser.username, user.lockedUser.password);
      SaucePage.errorMessage().should('contain','locked out');
    });
  });

  it('Session persists after refresh', () => {
    cy.fixture('user').then((user) => {
      SaucePage.visitLogin();
      SaucePage.login(user.validUser.username, user.validUser.password);
      cy.url().should('include','/inventory.html');
      cy.reload();
      cy.url().should('include','/inventory.html');
      SaucePage.inventoryContainer().should('be.visible');
    });
  });

});
