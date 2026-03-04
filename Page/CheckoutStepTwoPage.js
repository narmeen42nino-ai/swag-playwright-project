import { expect } from "@playwright/test";
import { URLS } from "../data/urls";

export class CheckoutStepTwoPage {
  cancelButton = '[data-test="cancel"]';
  finishButton = '[data-test="finish"]';
  title = '[data-test="title"]';
  constructor(page) {
    this.page = page;
  }
  async openCheckoutStepTwoPage() {
    await this.page.goto(URLS.checkouttwo);
  }
  async expectLoaded() {
    await expect(this.page).toHaveURL(URLS.checkouttwo);
    await expect(this.page.locator(this.title)).toHaveText(
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
