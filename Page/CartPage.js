import {expect} from '@playwright/test'
import {URLS} from '..//data/urls'

export class CartPage {
  carticon = '[data-test="shopping-cart-link"]'
  cartItems = '[data-test="inventory-item"]'
  cartBadge = '[data-test="shopping-cart-badge"]'
  checkoutbutton = '[data-test="checkout"]'
  title = '[data-test="title"]'
  constructor(page) {
    this.page = page
  }
  async openCartPage() {
    await this.page.locator(this.carticon).click()
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(URLS.carturl)
    await expect(this.page.locator(this.title)).toHaveText('Your Cart')
  }
  async verifyItemsCount(count) {
    await expect(this.page.locator(this.cartItems)).toHaveCount(count)
  }
  async goToCheckout() {
    await this.page.locator(this.checkoutbutton).click()
  }
}
