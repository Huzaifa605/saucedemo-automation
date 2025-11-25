# SauceDemo Test Automation Project

This repository contains the **Cypress-based test automation framework** for the SauceDemo e-commerce application, built as part of the Numeo AI take-home assignment.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Folder Structure](#folder-structure)
4. [Installation](#installation)
5. [Running Tests](#running-tests)
6. [CI/CD Integration](#cicd-integration)
7. [Test Plan Summary](#test-plan-summary)
8. [Contributing](#contributing)
9. [License](#license)

---

## Project Overview

This automation project validates the core e-commerce workflows of **SauceDemo**, including:

* Login
* Add/Remove items from cart
* Checkout information form
* Order confirmation

The framework is designed using **Cypress**, following **Page Object Model (POM)** best practices, with fixtures for test data and modular, reusable test functions.

---

## Features

* Full **end-to-end automation** for SauceDemo
* Modular **Page Object Model** design
* Fixtures for user data
* Smoke and regression test grouping
* CI/CD ready with GitHub Actions
* Screenshots and video recording on failures

---

## Folder Structure

```
project-root/
 ├── cypress/
 │   ├── e2e/
 │   │    ├── Login.cy.js
 │   │    ├── Cart_Checkout.cy.js
 │   │    ├── Smoke.cy.js
 │   ├── fixtures/
 │   │    └── user.json
 │   ├── support/
 │        └── Pages/
 │             └── SaucePage.js
 ├── cypress.config.js
 ├── package.json
 └── README.md
```

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Huzaifa605/saucedemo-automation.git
```

2. Navigate to the project folder:

```bash
cd project-root
```

3. Install dependencies:

```bash
npm install
```

---

## Running Tests

### Open Cypress Test Runner

```bash
npx cypress open
```

### Run Full Test Suite (Headless)

```bash
npx cypress run
```

### Run Tests by Tag

```bash
npx cypress run --env grep=@smoke
```

---

## CI/CD Integration

The project includes a GitHub Actions workflow:

* Runs tests automatically on push or pull requests
* Generates screenshots and video artifacts for failed tests
* Example workflow file: `.github/workflows/cypress.yml`

This demonstrates CI/CD readiness and modern automation practices.

---

## Test Plan Summary

* **Objective:** Validate the full end-to-end purchase flow in SauceDemo
* **Scope:** Login → Inventory → Cart → Checkout → Order Confirmation
* **Automation Focus:** UI functional testing using Cypress
* **Out of Scope:** API testing, performance, security, multi-user role testing
* **Test Data:** Stored in `cypress/fixtures/user.json`

---

## Contributing

* Follow the Page Object Model structure when adding new tests
* Maintain modular, reusable functions in `SaucePage.js`
* Write clean and maintainable code with proper comments

---

## License

This project is created as part of a **Numeo AI assignment by Huzaifa Khalid** and is intended for educational and demonstration purposes.
