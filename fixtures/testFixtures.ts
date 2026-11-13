
import { test as base, expect } from '@playwright/test';
import { CoffeeCartPage } from '../pages/CoffeeCartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

type TestFixtures = {
  coffeeCartPage: CoffeeCartPage;
  checkoutPage: CheckoutPage;
};

export const test = base.extend<TestFixtures>({
  coffeeCartPage: async ({ page }, use) => {
    const coffeeCartPage = new CoffeeCartPage(page);

    await use(coffeeCartPage);
  },

  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);

    await use(checkoutPage);
  },
});

export { expect };
