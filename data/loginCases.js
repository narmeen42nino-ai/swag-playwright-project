import { users } from "../data/userName";

export const positiveLoginCases = [
  {
    name: "standard user",
    user: users.standardUser,
  },
  {
    name: "problem user",
    user: users.problemUser,
  },
  {
    name: "performance user",
    user: users.performanceUser,
  },
  {
    name: "error user",
    user: users.errorUser,
  },
  {
    name: "visual user",
    user: users.visualUser,
  },
];

export const negativeLoginCases = [
  {
    name: "Locked out user",
    username: "locked_out_user",
    password: "secret_sauce",
    expectedError: "Epic sadface: Sorry, this user has been locked out.",
  },
  {
    name: "Wrong password",
    username: "standard_user",
    password: "12345678",
    expectedError:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    name: "Wrong username",
    username: "wrong_user",
    password: "secret_sauce",
    expectedError:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    name: "Wrong username and password",
    username: "wrong_user",
    password: "12345678",
    expectedError:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    name: "Empty username",
    username: "",
    password: "secret_sauce",
    expectedError: "Epic sadface: Username is required",
  },
  {
    name: "Empty password",
    username: "standard_user",
    password: "",
    expectedError: "Epic sadface: Password is required",
  },
  {
    name: "Empty username and password",
    username: "",
    password: "",
    expectedError: "Epic sadface: Username is required",
  },
];
