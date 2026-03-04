const validUsername = 'standard_user'
const validPassword = 'secret_sauce'

export const users = {
  standardUser: {username: validUsername, password: validPassword},
  lockedOutUser: {username: 'locked_out_user', password: validPassword},
  problemUser: {username: 'problem_user', password: validPassword},
  performanceUser: {
    username: 'performance_glitch_user',
    password: validPassword,
  },
  errorUser: {username: 'error_user', password: validPassword},
  visualUser: {username: 'visual_user', password: validPassword},
  wrongPassword: {username: validUsername, password: '12345678'},
  wrongUsername: {username: 'wrong_user', password: validPassword},
  wrongUserAndwrongPassword: {username: 'wrong_user', password: '12345678'},
  emptyUsername: {username: '', password: validPassword},
  emptyPassword: {username: validUsername, password: ''},
  emptyField: {username: '', password: ''},
}
