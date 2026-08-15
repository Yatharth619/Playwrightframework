# Playwright Automation Framework

## Overview

This project is an end-to-end automation framework built using **Playwright** and **JavaScript**. It follows the **Page Object Model (POM)** design pattern to improve code readability, maintainability, and scalability.

The framework automates key user workflows such as login, product search, cart operations, checkout, and API validation.

---

## Tech Stack

- Playwright
- JavaScript (ES6)
- Node.js
- Jest (Unit Testing Practice)
- Git
- GitHub

---

## Features

- Page Object Model (POM)
- UI Automation
- API Testing
- Reusable utility methods
- Assertions using Playwright Test
- Cross-browser support
- HTML Test Reports
- Clean project structure

---

## Project Structure

```
project-root/
│
├── pages/
│   ├── LoginPage.js
│   ├── HomePage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── tests/
│   ├── login.spec.js
│   ├── cart.spec.js
│   ├── checkout.spec.js
│   └── api.spec.js
│
├── utils/
│
├── fixtures/
│
├── playwright.config.js
│
└── package.json
```

---

## Test Coverage

Current automated scenarios include:

### Login

- Valid Login
- Invalid Login
- Error Message Validation

### Cart

- Add Product
- Remove Product
- Empty Cart Validation

### Checkout

- Successful Checkout
- Order Confirmation
- Total Price Validation

---

## Installation

Clone the repository

```bash
git clone <your-github-repository-url>
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

## Running Tests

Run all tests

```bash
npx playwright test
```

Run a specific test

```bash
npx playwright test tests/login.spec.js
```

Run tests in headed mode

```bash
npx playwright test --headed
```

Run on a specific browser

```bash
npx playwright test --project=chromium
```

---

## Test Reports

Generate HTML Report

```bash
npx playwright show-report
```

---

## Design Pattern

This project follows the **Page Object Model (POM)** pattern to separate page actions from test logic.

Benefits include:

- Better maintainability
- Reduced code duplication
- Reusable page methods
- Easier debugging

---

## Learning Outcomes

During this project I practiced:

- Playwright automation
- UI testing
- API testing
- Page Object Model
- Assertions
- Test organization
- JavaScript ES6
- Git & GitHub

---

## Author

Yatharth

QA Automation Engineer
