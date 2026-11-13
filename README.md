# Playwright-Mayan

## Project Overview

This project is a web automation testing framework developed using Playwright and TypeScript. It automates the testing of the Coffee Cart application (https://coffee-cart.app/) to verify its main functionalities and selected interactive features.

## Technologies Used

- Playwright
- TypeScript
- Node.js
- GitHub Actions
- Visual Studio Code

## Project Structure

```text
Playwright-Mayan/
├── .github/
│   └── workflows/
├── fixtures/
│   └── testFixtures.ts
├── pages/
│   ├── CoffeeCartPage.ts
│   └── CheckoutPage.ts
├── test-data/
│   └── checkoutData.ts
├── tests/
│   ├── checkout.spec.ts
│   ├── translation.spec.ts
│   ├── context-menu.spec.ts
│   └── promo-popup.spec.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md
```

## Installation

Make sure Node.js is installed.

Clone the repository:

```bash
git clone https://github.com/AbsorbingYendis/Playwright-Mayan.git
```

Navigate to the project directory:

```bash
cd Playwright-Mayan
```

Install dependencies:

```bash
npm ci
```

Install Playwright browsers:

```bash
npx playwright install
```

## Running the Tests

Run all test cases:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Generate and view the HTML test report:

```bash
npx playwright show-report
```

## Test Scenarios

### Main Functional Test
- Add coffee products to the cart.
- Handle the promotional popup when displayed.
- Proceed to checkout.
- Enter customer name and email.
- Submit the checkout form.
- Verify the purchase confirmation message.

### Bonus Features
- **Double-click Translation:** Verify that double-clicking a coffee title translates it into Chinese.
- **Right-click Context Menu:** Verify that right-clicking a coffee product opens the add-to-cart dialog.
- **Promotional Popup:** Verify that the promotional popup appears after every third cart item, including the 3rd, 6th, and 9th items.

## Test Automation and CI/CD

This project uses GitHub Actions to automatically execute Playwright tests when changes are pushed to the repository or when a pull request is created for the configured branches.

## Repository

https://github.com/AbsorbingYendis/Playwright-Mayan

---

Developed as a Playwright automation testing assessment.