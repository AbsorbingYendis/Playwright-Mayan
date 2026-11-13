
import { test, expect } from '../fixtures/testFixtures';

test('should translate coffee title to Chinese on double-click', async ({
  coffeeCartPage,
}) => {
  // Open Coffee Cart
  await coffeeCartPage.open();

  // Double-click the English coffee title
  await coffeeCartPage.page
    .getByRole('heading', { name: 'Espresso Macchiato $' })
    .dblclick();

  // Verify that the title is translated into Chinese
  await expect(
    coffeeCartPage.page.getByRole('heading', {
      name: '浓缩玛奇朵 $',
    })
  ).toBeVisible();
});
