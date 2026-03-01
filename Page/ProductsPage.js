import { expect } from "@playwright/test";
import { urls } from "..//data/urls";

export class ProductPage {
  addBackpack = '[data-test="add-to-cart-sauce-labs-backpack"]';
  addBikelight = '[data-test="add-to-cart-sauce-labs-bike-light"]';
  constructor(page) {
    this.page = page;
  }
  async openProductPage() {
    await this.page.goto(urls.inventoryUrl.url);
    await expect(this.page.locator('[data-test="title"]')).toHaveText(
      "Products",
    );
  }
  async addProduct() {
    await this.page.locator(this.addBackpack).click();
    await this.page.locator(this.addBikelight).click();
  }
}
