
import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.nameInput = page.getByRole('textbox', { name: 'Name' });
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.submitButton = page.getByRole('button', { name: 'Submit' });

    this.successMessage = page.getByText(
      'Thanks for your purchase. Please check your email for payment.'
    );
  }

  async fillCheckoutForm(name: string, email: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
  }

  async submitOrder() {
    await this.submitButton.click();
  }

  async verifySuccessfulCheckout() {
    await expect(this.successMessage).toBeVisible();
  }
}