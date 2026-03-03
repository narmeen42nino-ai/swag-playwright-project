import {expect} from '@playwright/test'
import {URLS} from '../data/urls'

// Why not include some locators in the methods themselves? you already put some of them as class variables.

export class CheckoutStepOnePage {
  firstName = '[data-test="firstName"]'
  lastName = '[data-test="lastName"]'
  zip = '[data-test="postalCode"]'
  continueButton = '[data-test="continue"]'
  constructor(page) {
    this.page = page
  }
  async openCheckoutStepOnePage() {
    await this.page.goto(URLS.chekoutone)
    await expect(this.page.locator('[data-test="title"]')).toHaveText(
      'Checkout: Your Information',
    )
  }
  async Information(firstName, lastName, zip) {
    await this.page.locator(this.firstName).fill(firstName)
    await this.page.locator(this.lastName).fill(lastName)
    await this.page.locator(this.zip).fill(zip)
    await this.page.locator(this.continueButton).click()
  }
}
