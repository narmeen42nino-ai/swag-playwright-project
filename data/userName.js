export const users = {
  standardUser: { username: "standard_user", password: "secret_sauce" },
  lockedOutUser: { username: "locked_out_user", password: "secret_sauce" },
  problemUser: { username: "problem_user", password: "secret_sauce" },
  performanceUser: {
    username: "performance_glitch_user",
    password: "secret_sauce",
  },
  errorUser: { username: "error_user", password: "secret_sauce" },
  visualUser: { username: "visual_user", password: "secret_sauce" },
  wrongPassword: { username: "standard_user", password: "12345678" },
  wrongUsername: { username: "wrong_user", password: "secret_sauce" },
  wrongUserAndwrongPassword: { username: "wrong_user", password: "12345678" },
  emptyUsername: { username: "", password: "secret_sauce" },
  emptyPassword: { username: "standard_user", password: "" },
  emptyField: { username: "", password: "" },
};
