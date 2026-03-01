import { expect } from "@playwright/test";
import { urls } from "..//data/urls";

export class LoginPage {
  userNameField = '[data-test="username"]';
  userPasswordField = '[data-test="password"]';
  loginButton = '[data-test="login-button"]';
  constructor(page) {
    this.page = page;
  }

  async openLoginPage() {
    await this.page.goto(urls.mainurl.url);
    await expect(this.page.locator(".login_logo")).toHaveText("Swag Labs");
  }
  async login(username, Password) {
    await this.page.locator(this.userNameField).fill(username);
    await this.page.locator(this.userPasswordField).fill(Password);
    await this.page.locator(this.loginButton).click();
  }
}
