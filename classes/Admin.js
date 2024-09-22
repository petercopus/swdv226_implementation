const User = require('./User');

class Admin extends User {
  constructor(userId, adminName, email, role) {
    super(userId, adminName, email);

    this.adminId = userId;
    this.adminName = adminName;
    this.email = email;
    this.role = role;
  }

  createUserAccount(username, email) {
    if (this.validateUserCreation(username, email)) {
      const newUser = new User(Date.now(), username, email, 'tempPass');

      return newUser;
    }

    return null;
  }

  setTemporaryPassword(userId) {
    // this is where we would normally update PW col in DB with the new temp pass
    return 'tempPass';
  }

  resetPassword(userId, newPassword) {
    // this is where we would update PW col in DB with new user defined password

    return true;
  }

  validateUserCreation(username, email) {
    return username.length > 0 && email.includes('@');
  }
}

module.exports = Admin;
