import { expect } from "@playwright/test";
import { urls } from "..//data/urls";

export class CheckoutStepTwoPage {
  cancelButton = '[data-test="cancel"]';
  finishButton = '[data-test="finish"]';
  constructor(page) {
    this.page = page;
  }
  async openCheckoutStepTwoPage() {
    await this.page.goto(urls.checkouttwo.url);
    await expect(this.page.locator('[data-test="title"]')).toHaveText(
      "Checkout: Overview",
    );
  }
  async cancelOrder() {
    await this.page.locator(this.cancelButton).click();
  }
  async finishOrder() {
    await this.page.locator(this.finishButton).click();
  }
}
