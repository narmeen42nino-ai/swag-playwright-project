import { expect } from "@playwright/test";
import { URLS } from "../data/urls";

export class ProductPage {
  addBackpack = '[data-test="add-to-cart-sauce-labs-backpack"]';
  addBikelight = '[data-test="add-to-cart-sauce-labs-bike-light"]';
  title = '[data-test="title"]';
  constructor(page) {
    this.page = page;
  }
  async openProductPage() {
    await this.page.goto(URLS.inventoryUrl);
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(URLS.inventoryUrl);
    await expect(this.page.locator(this.title)).toHaveText("Products");
  }

  async addProduct() {
    await this.page.locator(this.addBackpack).click();
    await this.page.locator(this.addBikelight).click();
  }
}
