import { expect, test } from "@playwright/test";
import { LoginPage } from "../Page/LoginPage";
import { URLS } from "../data/urls";
import { users } from "../data/userName";
import { ProductPage } from "../Page/ProductsPage";

// the bonus part should be implemented here as well.
test.describe("positive login tests", () => {
  test("standard user login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductPage(page);
    await loginPage.openLoginPage();
    await loginPage.login(
      users.standardUser.username,
      users.standardUser.password,
    );
    await productsPage.expectLoaded();
  });
  test("problem user login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductPage(page);
    await loginPage.openLoginPage();
    await loginPage.login(
      users.problemUser.username,
      users.problemUser.password,
    );
    await productsPage.expectLoaded();
  });
  test("performance glitch user login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductPage(page);

    await loginPage.openLoginPage();
    await loginPage.login(
      users.performanceUser.username,
      users.performanceUser.password,
    );
    await productsPage.expectLoaded();
  });
  test("error user login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductPage(page);
    await loginPage.openLoginPage();
    await loginPage.login(users.errorUser.username, users.errorUser.password);
    await productsPage.expectLoaded();
  });

  test("visual user", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductPage(page);

    await loginPage.openLoginPage();
    await loginPage.login(users.visualUser.username, users.visualUser.password);
    await productsPage.expectLoaded();
  });
});

test.describe("Negative Login Tests", () => {
  test("Locked out user", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
    await loginPage.login(
      users.lockedOutUser.username,
      users.lockedOutUser.password,
    );
    await loginPage.expectErrorMessage(
      "Epic sadface: Sorry, this user has been locked out.",
    );
  });

  test("wrong password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();

    await loginPage.login(
      users.wrongPassword.username,
      users.wrongPassword.password,
    );
    await loginPage.expectErrorMessage(
      "Epic sadface: Username and password do not match any user in this service",
    );
  });

  test("Wrong UserName", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
    await loginPage.login(
      users.wrongUsername.username,
      users.wrongUsername.password,
    );
    await loginPage.expectErrorMessage(
      "Epic sadface: Username and password do not match any user in this service",
    );
  });

  test("Wrong UserName And Password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
    await loginPage.login(
      users.wrongUserAndwrongPassword.username,
      users.wrongUserAndwrongPassword.password,
    );
    await loginPage.expectErrorMessage(
      "Epic sadface: Username and password do not match any user in this service",
    );
  });

  test("Empty Username", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
    await loginPage.login(
      users.emptyUsername.username,
      users.emptyUsername.password,
    );
    await loginPage.expectErrorMessage("Epic sadface: Username is required");
  });

  test("Empty Password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
    await loginPage.login(
      users.emptyPassword.username,
      users.emptyPassword.password,
    );
    await loginPage.expectErrorMessage("Epic sadface: Password is required");
  });

  test("Empty Username And password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
    await loginPage.login(users.emptyField.username, users.emptyField.password);
    await loginPage.expectErrorMessage("Epic sadface: Username is required");
  });
});
