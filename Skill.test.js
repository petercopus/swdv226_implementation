const Skill = require('./classes/Skill');

const testSkillId = 10;
const testSkillName = 'Magic';
const testSkillIcon = 'magic';
const testSkillCurrentExp = 2000;

test('Skill should initialize with the correct experience and level', () => {
  const skill = new Skill(testSkillId, testSkillName, testSkillIcon, testSkillCurrentExp);
  expect(skill.skillName).toBe('Magic');
  expect(skill.currentExperience).toBe(2000);
  expect(skill.currentLevel).toBe(2); // calculations not accurate yet until Ive calculated formula for currentLevel
});

test('Skill should update experience and level correctly', () => {
  const skill = new Skill(testSkillId, testSkillName, testSkillIcon, testSkillCurrentExp);

  skill.updateSkillExperience(1000);
  expect(skill.currentExperience).toBe(3000);
  expect(skill.currentLevel).toBe(3);
});

test('Skill should set an experience goal', () => {
  const skill = new Skill(testSkillId, testSkillName, testSkillIcon, testSkillCurrentExp);

  skill.setExperienceGoal(5000);
  expect(skill.experienceGoal).toBe(5000);
});

test('Skill should validate experience goal', () => {
  const skill = new Skill(testSkillId, testSkillName, testSkillIcon, testSkillCurrentExp);

  expect(skill.validateExperienceGoal(3000)).toBe(true);
  expect(skill.validateExperienceGoal(1000)).toBe(false);
});
