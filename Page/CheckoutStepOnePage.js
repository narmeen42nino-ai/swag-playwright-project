import { expect } from "@playwright/test";
import { urls } from "..//data/urls";

export class CheckoutStepOnePage {
  firstName = '[data-test="firstName"]';
  lastName = '[data-test="lastName"]';
  zip = '[data-test="postalCode"]';
  continueButton = '[data-test="continue"]';
  constructor(page) {
    this.page = page;
  }
  async openCheckoutStepOnePage() {
    await this.page.goto(urls.chekoutone.url);
    await expect(this.page.locator('[data-test="title"]')).toHaveText(
      "Checkout: Your Information",
    );
  }
  async Information(firstName, lastName, zip) {
    await this.page.locator(this.firstName).fill(firstName);
    await this.page.locator(this.lastName).fill(lastName);
    await this.page.locator(this.zip).fill(zip);
    await this.page.locator(this.continueButton).click();
  }
}
