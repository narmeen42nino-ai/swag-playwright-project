import { expect } from "@playwright/test";
import { URLS } from "../data/urls";

export class CheckoutCompletePage {
  backHomeButton = '[data-test="back-to-products"]';
  successMessageLocator = '[data-test="complete-header"]';
  title = '[data-test="title"]';
  constructor(page) {
    this.page = page;
  }
  async openCheckoutCompletePage() {
    await this.page.goto(URLS.checkoutcomplete);
  }
  async expectLoaded() {
    await expect(this.page).toHaveURL(URLS.checkoutcomplete);
    await expect(this.page.locator(this.title)).toHaveText(
      "Checkout: Complete!",
    );
  }
  async SuccessMessage() {
    await expect(this.page.locator(this.successMessageLocator)).toHaveText(
      "Thank you for your order!",
    );
  }
  async backhome() {
    await this.page.locator(this.backHomeButton).click();
  }
}
