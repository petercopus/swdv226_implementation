const ExperienceGoal = require('./ExperienceGoal');

class User {
  constructor(userId, username, email, password) {
    this.userId = userId;
    this.username = username;
    this.email = email;
    this.password = password;
    this.registrationDate = new Date();
    this.accountStatus = 'inactive';
    this.confirmationEmailStatus = false;
    this.experienceGoals = [];
    this.trackedPlayers = [];
    this.authenticationStatus = false;
  }

  register(username, email, password) {
    if (this.validateRegistration(username, email, password)) {
      this.username = username;
      this.email = email;
      this.password = password;
      this.sendConfirmationEmail();

      // here is where we would normally call DB to insert record
      return true;
    }

    return false;
  }

  validateRegistration(username, email, password) {
    return username.length > 0 && email.includes('@') && password.length > 8;
  }

  sendConfirmationEmail() {
    // here is where we would normally send an email to the new user
    this.confirmationEmailStatus = true;
    return true;
  }

  login(email, password) {
    // here we would normally take the hashed password and compare its hash to
    // the hash in the DB for a specific email
    return this.email === email && this.password === password;
  }

  activateAccount() {
    // if the user has confirmed their email
    if (this.confirmationEmailStatus) {
      this.accountStatus = 'active';
      return true;
    }

    // if email is not confirmed, return false
    return false;
  }

  resetPassword(newPassword) {
    if (newPassword.length > 8) {
      this.password = newPassword;
      return true;
    }

    return false;
  }

  setExperienceGoal(player, skillId, goalAmount) {
    const newGoal = new ExperienceGoal(this.userId, player.playerId, skillId, goalAmount);
    this.experienceGoals.push(newGoal);
  }

  getExperienceGoal(player, skillId) {
    return this.experienceGoals.find((goal) => goal.skillId === skillId && goal.playerId === player.playerId);
  }

  saveExperienceGoal(player, goal) {
    const existingGoal = this.getExperienceGoal(player, goal.skillId);

    // if we already have an existing goal for a specific player
    if (existingGoal) {
      // update the exisiting goal
      existingGoal.goalAmount = goal.goalAmount;
      return true;
    }

    return false;
  }

  cancelExperienceGoal(player, skillId) {
    this.experienceGoals = this.experienceGoals.filter((goal) => !(goal.skillId === skillId && goal.playerId === player.playerId));
  }

  trackPlayer(player) {
    // if we're not already tracking a specific player
    if (!this.trackedPlayers.includes(player)) {
      // add the player
      this.trackedPlayers.push(player);
      return true;
    }

    return false;
  }

  untrackPlayer(player) {
    this.trackedPlayers = this.trackedPlayers.filter((p) => p !== player);
  }
}

module.exports = User;
