
import { test } from '../fixtures/testFixtures';
import { checkoutData } from '../test-data/checkoutData';

test('should successfully complete a coffee purchase', async ({
  coffeeCartPage,
  checkoutPage,
}) => {
  // Open Coffee Cart
  await coffeeCartPage.open();

  // Add products to the cart
  await coffeeCartPage.addProduct('Cappuccino');
  await coffeeCartPage.addProduct('Mocha');
  await coffeeCartPage.addProduct('Flat_White');

  // Handle promotional popup if it appears
  await coffeeCartPage.handlePromoPopup();

  // Proceed to checkout
  await coffeeCartPage.proceedToCheckout();

  // Fill in customer details
  await checkoutPage.fillCheckoutForm(
    checkoutData.customerName,
    checkoutData.customerEmail
  );

  // Submit order
  await checkoutPage.submitOrder();

  // Verify successful checkout
  await checkoutPage.verifySuccessfulCheckout();
});