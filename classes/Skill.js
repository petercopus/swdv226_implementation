class Skill {
  constructor(skillId, skillName, skillIcon, currentExperience) {
    this.skillId = skillId;
    this.skillName = skillName;
    this.skillIcon = skillIcon;
    this.currentExperience = currentExperience;
    this.currentLevel = this.calculateCurrentLevel();
    this.experienceGoal = null;
  }

  setExperienceGoal(goalAmount) {
    this.experienceGoal = goalAmount;
  }

  getSkillExperience() {
    return this.currentExperience;
  }

  updateSkillExperience(experience) {
    this.currentExperience += experience;
    this.calculateCurrentLevel();
  }

  calculateCurrentLevel() {
    // will need to tweak this value with better formula to get OSRS level based on experience
    this.currentLevel = Math.floor(this.currentExperience / 1000);
    return this.currentLevel;
  }

  validateExperienceGoal(goalAmount) {
    return goalAmount > this.currentExperience;
  }
}

module.exports = Skill;
