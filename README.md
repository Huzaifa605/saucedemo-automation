# 🤖 SauceDemo Automation Framework

This repository contains the Cypress-based test automation framework for the [SauceDemo e-commerce application](https://www.saucedemo.com/), built as part of the **Numeo AI take-home assignment**.

---

## 📝 Table of Contents
* [Project Overview](#project-overview)
* [Features](#features)
* [Folder Structure](#folder-structure)
* [Installation](#installation)
* [Running Tests](#running-tests)
* [CI/CD Integration](#cicd-integration)
* [Test Plan Summary](#test-plan-summary)
* [Test Strategy](#test-strategy)
* [Contributing](#contributing)
* [License](#license)

---

## 💡 Project Overview
This automation project validates the core e-commerce workflows of SauceDemo, including:

* **Login**
* **Add/Remove items** from cart
* **Checkout form** submission
* **Order confirmation**

The framework is designed using Cypress with **Page Object Model (POM)** best practices, **fixtures** for test data, and **modular, reusable test functions**.

---

## ✨ Features
* Full end-to-end automation for SauceDemo.
* Modular **Page Object Model** design.
* **Fixtures** for user and test data.
* **Smoke** and **regression** test grouping.
* **CI/CD ready** with GitHub Actions.

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

## 🛠️ Installation
Follow these steps to set up the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Huzaifa605/saucedemo-automation.git
    ```
2.  **Navigate to the project folder:**
    ```bash
    cd saucedemo-automation
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```

---

## 🚀 Running Tests
You can run tests using the Cypress Test Runner or via command line (headless mode).

| Command | Description |
| :--- | :--- |
| `npx cypress open` | **Open Cypress Test Runner** (Interactive GUI mode) |
| `npx cypress run` | **Run Full Test Suite** (Headless mode) |
| `npx cypress run --env grep=@smoke` | **Run Tests by Tag** (e.g., only tests tagged `@smoke`) |

---

## ⚙️ CI/CD Integration
* A **GitHub Actions** workflow is configured to run tests automatically on `push` or `pull requests`.
* Generates **screenshots and video artifacts** for failed tests.
* **Workflow file:** `.github/workflows/cypress-tests.yml`

---

## 📋 Test Plan Summary
| Aspect | Details |
| :--- | :--- |
| **Objective** | Validate full end-to-end purchase flow. |
| **Scope** | Login → Inventory → Cart → Checkout → Order Confirmation. |
| **Automation Focus** | UI functional testing using Cypress. |
| **Out of Scope** | API testing, performance, security, multi-user role testing. |
| **Test Data** | Centralized in `cypress/fixtures/user.json`. |

---

## 📊 Test Strategy

### Objective
Ensure end-to-end automation coverage for critical flows in SauceDemo with maintainable, scalable, and robust tests.

### Test Prioritization
* **High:** Login, Cart, Checkout, Order Confirmation.
* **Medium:** Inventory filtering, adding/removing multiple items.
* **Low:** UI edge cases, visual validations.

### Automation vs Manual
| Area | Approach | Reason |
| :--- | :--- | :--- |
| **Login** | Automated | Critical pre-requisite flow. |
| **Add to Cart** | Automated | Core feature verification. |
| **Checkout** | Automated | End-to-end transaction verification. |
| **UI Layout** | Manual | Visual changes are less frequent. |
| **Error Handling** | Manual/Automated | Targeted risk coverage. |

### Test Maintenance
* Centralized **Page Object Model** in `SaucePage.js`.
* Test data stored in **Fixtures** (`user.json`).
* **Modular tests** grouped by feature.
* **CI/CD workflow** ensures early regression detection.

### Test Evolution
* Expand automation coverage for medium/low priority areas.
* Integrate cross-browser testing.
* Periodically refactor Page Objects and test data.

### Risk Analysis
| Risk | Mitigation |
| :--- | :--- |
| **Login failures** | Automated testing to ensure basic access. |
| **Cart inconsistencies** | Automated testing for add/remove functionality. |
| **Checkout form errors** | Automated scenarios with manual edge case testing. |
| **UI changes** | Visual testing integration (optional for future). |

### CI/CD & Reporting
* Automatic runs on GitHub push/pull requests.
* Screenshots and video recordings.

---

## 🤝 Contributing
Please adhere to the following guidelines when contributing:

* Follow the **Page Object Model (POM)** structure.
* Maintain modular and reusable functions in `SaucePage.js`.
* Write clean and maintainable code with proper comments.

---

## 📜 License
Created as part of the **Numeo AI assignment** by **Huzaifa Khalid** for educational and is intended for educational and demonstration purposes.
