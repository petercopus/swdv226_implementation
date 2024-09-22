class ExperienceGoal {
  constructor(userId, playerId, skillId, goalAmount) {
    this.goalId = Date.now(); // decided to go this route to have a unique ID based on current timestamp
    this.userId = userId;
    this.playerId = playerId;
    this.skillId = skillId;
    this.goalAmount = goalAmount;
    this.goalSetDate = new Date();
    this.goalCompletionStatus = false;
  }

  createGoal(userId, playerId, skillId, goalAmount) {
    return new ExperienceGoal(userId, playerId, skillId, goalAmount);
  }

  saveGoal() {
    // this is where we would have logic to update DB and insert (or update) goal record
    return true;
  }

  clearGoal() {
    this.goalAmount = 0;
  }

  confirmGoalSet() {
    return this.goalAmount > 0;
  }

  checkGoalCompletion(currentExperience) {
    if (currentExperience >= this.goalAmount) this.goalCompletionStatus = true;
    else this.goalCompletionStatus = false;

    return this.goalCompletionStatus;
  }
}

module.exports = ExperienceGoal;
