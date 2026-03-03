import {expect} from '@playwright/test'
import {URLS} from '../data/urls'

// Why not include some locators in the methods themselves? you already put some of them as class variables.

export class CheckoutCompletePage {
  backHomeButton = '[data-test="back-to-products"]'
  SuccessMessageLocator = '[data-test="complete-header"]'
  constructor(page) {
    this.page = page
  }
  async opencCheckoutCompletePage() {
    await this.page.goto(URLS.checkoutcomplete)
    await expect(this.page.locator('[data-test="title"]')).toHaveText(
      'Checkout: Complete!',
    )
  }
  async SuccessMessage() {
    await expect(this.page.locator(this.SuccessMessageLocator)).toHaveText(
      'Thank you for your order!',
    )
  }
  async backhome() {
    await this.page.locator(this.backHomeButton).click()
  }
}
