/// <reference types="cypress" />
import SaucePage from '../support/Pages/SaucePage'

describe('Cart & Checkout Tests', () => {

  beforeEach(() => {
    cy.fixture('user').then((user) => {
      SaucePage.visitLogin();
      SaucePage.login(user.validUser.username, user.validUser.password);
      cy.url().should('include','/inventory.html');
    });
  });

  it('Add multiple items to cart and verify total price', () => {
    const items = ['Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt'];

    items.forEach(item => {
      SaucePage.addToCart(item);
    });

    SaucePage.cartIcon().click();
    cy.get('.cart_item').should('have.length', items.length);
  });

  it('Complete checkout with required fields', () => {
    SaucePage.addToCart('Sauce Labs Backpack');
    SaucePage.cartIcon().click();
    SaucePage.checkoutButton().click();

    SaucePage.fillCheckoutForm('Test','User','12345');
    SaucePage.finishButton().click();
    SaucePage.orderConfirmation().should('have.text', 'Thank you for your order!')
  });

  it('Checkout fails when required fields are missing', () => {
    SaucePage.addToCart('Sauce Labs Backpack');
    SaucePage.cartIcon().click();
    SaucePage.checkoutButton().click();

    SaucePage.continueButton().click();
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Error');
  });

});
