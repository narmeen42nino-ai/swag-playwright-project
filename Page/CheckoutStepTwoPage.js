import {expect} from '@playwright/test'
import {URLS} from '../data/urls'

// Why not include some locators in the methods themselves? you already put some of them as class variables.
export class CheckoutStepTwoPage {
  cancelButton = '[data-test="cancel"]'
  finishButton = '[data-test="finish"]'
  constructor(page) {
    this.page = page
  }
  async openCheckoutStepTwoPage() {
    await this.page.goto(URLS.checkouttwo)
    await expect(this.page.locator('[data-test="title"]')).toHaveText(
      'Checkout: Overview',
    )
  }
  async cancelOrder() {
    await this.page.locator(this.cancelButton).click()
  }
  async finishOrder() {
    await this.page.locator(this.finishButton).click()
  }
}
