
import { test, expect } from '../fixtures/testFixtures';

test('should open add-to-cart dialog on right-click', async ({
  coffeeCartPage,
}) => {
  // Open Coffee Cart
  await coffeeCartPage.open();

  // Right-click Espresso
  await coffeeCartPage.page
    .locator('[data-test="Espresso"]')
    .click({ button: 'right' });

  // Verify the add-to-cart dialog appears
  await expect(
    coffeeCartPage.page.getByRole('button', { name: 'Yes' })
  ).toBeVisible();

  // Confirm adding the product
  await coffeeCartPage.page.getByRole('button', { name: 'Yes' }).click();
});