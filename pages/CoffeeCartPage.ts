
import { Page, Locator } from '@playwright/test';

export class CoffeeCartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;
  readonly promoButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.promoButton = page.getByRole('button', {
      name: 'Yes, of course!',
    });
  }

  async open() {
    await this.page.goto('/');
  }

  async addProduct(productName: string) {
    await this.page.locator(`[data-test="${productName}"]`).click();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  async handlePromoPopup() {
    if (await this.promoButton.isVisible()) {
      await this.promoButton.click();
    }
  }
}
