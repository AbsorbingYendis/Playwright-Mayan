
import { test, expect } from '../fixtures/testFixtures';

test('should display promotional popup after adding three products', async ({
  coffeeCartPage,
}) => {
  // Open Coffee Cart
  await coffeeCartPage.open();

  // Add the first product
  await coffeeCartPage.addProduct('Cappuccino');

  // Add the second product
  await coffeeCartPage.addProduct('Mocha');

  // Add the third product
  await coffeeCartPage.addProduct('Flat_White');

  // Verify that the promotional popup appears
  const promoButton = coffeeCartPage.page.getByRole('button', {
    name: 'Yes, of course!',
  });

  await expect(promoButton).toBeVisible();

  // Accept the promotional offer
  await promoButton.click();
});