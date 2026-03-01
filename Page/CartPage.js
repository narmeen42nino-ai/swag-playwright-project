import { expect } from "@playwright/test";
import { urls } from "..//data/urls";

export class CartPage {
  carticon = '[data-test="shopping-cart-link"]';
  cartItems = '[data-test="inventory-item"]';
  cartBadge = '[data-test="shopping-cart-badge"]';
  checkoutbutton = '[data-test="checkout"]';
  constructor(page) {
    this.page = page;
  }
  async openCartPge() {
    await this.page.locator(this.carticon).click();
    await expect(this.page.locator('[data-test="title"]')).toHaveText(
      "Your Cart",
    );
  }
  async verifyItemsCount(count) {
    await expect(this.page.locator(this.cartItems)).toHaveCount(count);
  }
  async goToCheckout() {
    await this.page.locator(this.checkoutbutton).click();
  }
}
