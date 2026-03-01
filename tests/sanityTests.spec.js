import { test, expect } from "@playwright/test";
import { LoginPage } from "../Page/LoginPage";
import { CartPage } from "../Page/CartPage";
import { CheckoutStepOnePage } from "../Page/CheckoutStepOnePage";
import { CheckoutStepTwoPage } from "../Page/CheckoutStepTwoPage";
import { CheckoutCompletePage } from "../Page/CheckoutCompletePage";
import { ProductPage } from "../Page/ProductsPage";
import { urls } from "../data/urls";
import { users } from "../data/userName";
import { checkoutInformation } from "../data/checkoutData";

test.describe("E2E Test", () => {
  test("Sanity Test", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    const checkoutStepOnePage = new CheckoutStepOnePage(page);
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);
    const productPage = new ProductPage(page);

    await loginPage.openLoginPage();
    await loginPage.login(
      users.standardUser.username,
      users.standardUser.password,
    );
    await expect(page).toHaveURL(urls.inventoryUrl.url);
    await expect(page.locator('[data-test="title"]')).toHaveText("Products");

    await productPage.addProduct(
      productPage.addBackpack,
      productPage.addBikelight,
    );

    await cartPage.openCartPge();
    await cartPage.verifyItemsCount(2);
    await cartPage.goToCheckout();
    (await expect(page.locator('[data-test="title"]')).toHaveText(
      "Checkout: Your Information",
    ),
      await checkoutStepOnePage.Information(
        checkoutInformation.Information.firtsName,
        checkoutInformation.Information.lastName,
        checkoutInformation.Information.zip,
      ));
    await checkoutStepTwoPage.openCheckoutStepTwoPage();
    await expect(page.locator('[data-test="title"]')).toHaveText(
      "Checkout: Overview",
    );
    await checkoutStepTwoPage.finishOrder();
    await expect(page.locator('[data-test="title"]')).toHaveText(
      "Checkout: Complete!",
    );
    await checkoutCompletePage.SuccessMessage();
  });
});
