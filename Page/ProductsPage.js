import {expect} from '@playwright/test'
import {URLS} from '../data/urls'

// Why not include some locators in the methods themselves? you already put some of them as class variables.
export class ProductPage {
  addBackpack = '[data-test="add-to-cart-sauce-labs-backpack"]'
  addBikelight = '[data-test="add-to-cart-sauce-labs-bike-light"]'
  constructor(page) {
    this.page = page
  }
  async openProductPage() {
    await this.page.goto(URLS.inventoryUrl)
    await expect(this.page.locator('[data-test="title"]')).toHaveText(
      'Products',
    )
  }
  async addProduct() {
    await this.page.locator(this.addBackpack).click()
    await this.page.locator(this.addBikelight).click()
  }
}
