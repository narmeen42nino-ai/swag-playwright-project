import {test} from '@playwright/test'
import {CartPage} from '../Page/CartPage'
import {CheckoutCompletePage} from '../Page/CheckoutCompletePage'
import {CheckoutStepOnePage} from '../Page/CheckoutStepOnePage'
import {CheckoutStepTwoPage} from '../Page/CheckoutStepTwoPage'
import {LoginPage} from '../Page/LoginPage'
import {ProductPage} from '../Page/ProductsPage'
import {checkoutInformation} from '../data/checkoutData'
import {users} from '../data/userName'

test.describe('E2E Test', () => {
  test('Sanity Test', async ({page}) => {
    const loginPage = new LoginPage(page)
    const cartPage = new CartPage(page)
    const checkoutStepOnePage = new CheckoutStepOnePage(page)
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page)
    const checkoutCompletePage = new CheckoutCompletePage(page)
    const productPage = new ProductPage(page)

    await loginPage.openLoginPage()
    await loginPage.login(
      users.standardUser.username,
      users.standardUser.password,
    )
    await productPage.expectLoaded()

    await productPage.addProduct(
      productPage.addBackpack,
      productPage.addBikelight,
    )

    await cartPage.openCartPage()
    await cartPage.verifyItemsCount(2)
    await cartPage.goToCheckout()
    await checkoutStepOnePage.expectLoaded()

    await checkoutStepOnePage.Information(
      checkoutInformation.Information.firtsName,
      checkoutInformation.Information.lastName,
      checkoutInformation.Information.zip,
    )
    await checkoutStepTwoPage.expectLoaded()
    await checkoutStepTwoPage.finishOrder()
    await checkoutCompletePage.expectLoaded()

    await checkoutCompletePage.SuccessMessage()
  })
})
