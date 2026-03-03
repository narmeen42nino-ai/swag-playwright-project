import { expect } from "@playwright/test";
import { URLS } from "../data/urls";

// Why not include some locators in the methods themselves? you already put some of them as class variables.
export class LoginPage {
  userNameField = '[data-test="username"]';
  userPasswordField = '[data-test="password"]';
  loginButton = '[data-test="login-button"]';
  errorMessage = '[data-test="error"]';
  constructor(page) {
    this.page = page;
  }

  async openLoginPage() {
    await this.page.goto(URLS.mainurl);
    await expect(this.page.locator(".login_logo")).toHaveText("Swag Labs");
  }
  async login(username, Password) {
    await this.page.locator(this.userNameField).fill(username);
    await this.page.locator(this.userPasswordField).fill(Password);
    await this.page.locator(this.loginButton).click();
  }

  async expectErrorMessage(text) {
    await expect(this.page).toHaveURL(URLS.mainurl);
    await expect(this.page.locator(this.errorMessage)).toHaveText(text);
  }
}
