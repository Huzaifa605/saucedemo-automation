class SaucePage {

  // -----------------------
  // Login Page Functions
  // -----------------------
  visitLogin() {
    cy.visit('https://www.saucedemo.com/');
  }

  usernameField() {
    return cy.get('#user-name');
  }

  passwordField() {
    return cy.get('#password');
  }

  loginButton() {
    return cy.get('#login-button');
  }

  errorMessage() {
    return cy.get('[data-test="error"]');
  }

  login(username, password) {
    this.usernameField().type(username);
    this.passwordField().type(password);
    this.loginButton().click();
  }

  // -----------------------
  // Products / Inventory
  // -----------------------
  inventoryContainer() {
    return cy.get('.inventory_list');
  }

  addToCart(itemName) {
    return cy.contains('.inventory_item', itemName).find('button').click();
  }

  removeFromCart(itemName) {
    return cy.contains('.inventory_item', itemName).find('button').contains('Remove').click();
  }

  cartIcon() {
    return cy.get('.shopping_cart_link');
  }

  // -----------------------
  // Checkout Flow
  // -----------------------
  checkoutButton() {
    return cy.get('[data-test="checkout"]');
  }

  firstNameField() {
    return cy.get('[data-test="firstName"]');
  }

  lastNameField() {
    return cy.get('[data-test="lastName"]');
  }

  postalCodeField() {
    return cy.get('[data-test="postalCode"]');
  }

  continueButton() {
    return cy.get('[data-test="continue"]');
  }

  finishButton() {
    return cy.get('[data-test="finish"]');
  }

  orderConfirmation() {
    return cy.get('[data-test="complete-header"]')
  }

  fillCheckoutForm(firstName, lastName, postalCode) {
    this.firstNameField().type(firstName);
    this.lastNameField().type(lastName);
    this.postalCodeField().type(postalCode);
    this.continueButton().click();
  }
}

export default new SaucePage();