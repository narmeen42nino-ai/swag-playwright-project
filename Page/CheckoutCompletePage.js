import { expect } from "@playwright/test";
import { urls } from "..//data/urls";

export class CheckoutCompletePage {
  backHomeButton = '[data-test="back-to-products"]';
  SuccessMessageLocator = '[data-test="complete-header"]';
  constructor(page) {
    this.page = page;
  }
  async opencCheckoutCompletePage() {
    await this.page.goto(urls.checkoutcomplete.url);
    await expect(this.page.locator('[data-test="title"]')).toHaveText(
      "Checkout: Complete!",
    );
  }
  async SuccessMessage() {
    await expect(this.page.locator(this.SuccessMessageLocator)).toHaveText(
      "Thank you for your order!",
    );
  }
  async backhome() {
    await this.page.locator(this.backHomeButton).click();
  }
}
