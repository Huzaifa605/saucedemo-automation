/// <reference types="cypress" />
import SaucePage from '../support/Pages/SaucePage'

describe('Smoke Tests @smoke', () => {

  let userData;

  before(() => {
    // Load fixture only once
    cy.fixture('user').then((data) => {
      userData = data;
    })
  })

  beforeEach(() => {
    // Login before every test
    SaucePage.visitLogin()
    SaucePage.login(userData.validUser.username, userData.validUser.password)

    // Ensure login is successful
    cy.url().should('include', '/inventory.html')
  })

  it('Add item to cart works', () => {
    SaucePage.addToCart('Sauce Labs Backpack')
    SaucePage.cartIcon().click()
    cy.get('.cart_item').should('have.length', 1)
    SaucePage.checkoutButton().click()
    SaucePage.fillCheckoutForm('Smoke', 'Test', '11111')
    SaucePage.finishButton().click()
    SaucePage.orderConfirmation().should('be.visible')
  })

})
