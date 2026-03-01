import { test, expect } from "@playwright/test";
import { LoginPage } from "../Page/LoginPage";
import { users } from "../data/userName";
import { urls } from "../data/urls";

test.describe("positive login tests", () => {
  test("standard user login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
    await loginPage.login(
      users.standardUser.username,
      users.standardUser.password,
    );
    await expect(page).toHaveURL(urls.inventoryUrl.url);
    await expect(page.locator('[data-test="title"]')).toHaveText("Products");
  });

  test("problem user login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
    await loginPage.login(
      users.problemUser.username,
      users.problemUser.password,
    );
    await expect(page).toHaveURL(urls.inventoryUrl.url);
    await expect(page.locator('[data-test="title"]')).toHaveText("Products");
  });
  test("performance glitch user login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
    await loginPage.login(
      users.performanceUser.username,
      users.performanceUser.password,
    );
    await expect(page).toHaveURL(urls.inventoryUrl.url);
    await expect(page.locator('[data-test="title"]')).toHaveText("Products");
  });
  test("error user login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
    await loginPage.login(users.errorUser.username, users.errorUser.password);
    await expect(page).toHaveURL(urls.inventoryUrl.url);
    await expect(page.locator('[data-test="title"]')).toHaveText("Products");
  });

  test("visual user", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
    await loginPage.login(users.visualUser.username, users.visualUser.password);
    await expect(page).toHaveURL(urls.inventoryUrl.url);
    await expect(page.locator('[data-test="title"]')).toHaveText("Products");
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
    await expect(page).toHaveURL(urls.mainurl.url);
    await expect(page.locator('[data-test="error"]')).toHaveText(
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
    await expect(page).toHaveURL(urls.mainurl.url);
    await expect(page.locator('[data-test="error"]')).toHaveText(
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
    await expect(page).toHaveURL(urls.mainurl.url);
    await expect(page.locator('[data-test="error"]')).toHaveText(
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
    await expect(page).toHaveURL(urls.mainurl.url);
    await expect(page.locator('[data-test="error"]')).toHaveText(
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
    await expect(page).toHaveURL(urls.mainurl.url);
    await expect(page.locator('[data-test="error"]')).toHaveText(
      "Epic sadface: Username is required",
    );
  });

  test("Empty Password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
    await loginPage.login(
      users.emptyPassword.username,
      users.emptyPassword.password,
    );
    await expect(page).toHaveURL(urls.mainurl.url);
    await expect(page.locator('[data-test="error"]')).toHaveText(
      "Epic sadface: Password is required",
    );
  });

  test("Empty Username And password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
    await loginPage.login(users.emptyField.username, users.emptyField.password);
    await expect(page).toHaveURL(urls.mainurl.url);
    await expect(page.locator('[data-test="error"]')).toHaveText(
      "Epic sadface: Username is required",
    );
  });
});
