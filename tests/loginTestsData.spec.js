import { test, expect } from "@playwright/test";
import { negativeLoginCases, positiveLoginCases } from "../data/loginCases";
import { LoginPage } from "../Page/LoginPage";
import { ProductPage } from "../Page/ProductsPage";

test.describe("positive login tests", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
  });
  positiveLoginCases.forEach(({ name, user }) => {
    test(`${name} login`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      const productsPage = new ProductPage(page);
      await loginPage.login(user.username, user.password);
      await productsPage.expectLoaded();
    });
  });
});

test.describe("Negative Login Tests", () => {
  negativeLoginCases.forEach(({ name, username, password, expectedError }) => {
    test(`${name} login`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.openLoginPage();
      await loginPage.login(username, password);
      await loginPage.expectErrorMessage(expectedError);
    });
  });
});
