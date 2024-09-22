const ExperienceGoal = require('./classes/ExperienceGoal');

const testUserId = 1;
const testPlayerId = 1;
const testSkillId = 10;
const testGoalAmount = 5000;

test('ExperienceGoal should create new goal', () => {
  const goal = new ExperienceGoal(testUserId, testPlayerId, testSkillId, testGoalAmount);

  expect(goal.goalAmount).toBe(5000);
  expect(goal.goalCompletionStatus).toBe(false);
});

test('ExperienceGoal should confirm goal set', () => {
  const goal = new ExperienceGoal(testUserId, testPlayerId, testSkillId, testGoalAmount);

  expect(goal.confirmGoalSet()).toBe(true);
});

test('ExperienceGoal should clear goal', () => {
  const goal = new ExperienceGoal(testUserId, testPlayerId, testSkillId, testGoalAmount);

  goal.clearGoal();

  expect(goal.goalAmount).toBe(0);
});

test('ExperienceGoal should correctly check goal completion status', () => {
  const goal = new ExperienceGoal(testUserId, testPlayerId, testSkillId, testGoalAmount);
  const completionStatus = goal.checkGoalCompletion(6000);

  expect(completionStatus).toBe(true);
});
