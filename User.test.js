const User = require('./classes/User');
const ExperienceGoal = require('./classes/ExperienceGoal');

const Player = { playerId: 1, playerName: 'testPlayer' };
const testingUserName = 'testUser';
const testingEmail = 'testUser@gmail.com';
const testingPassword = 'testPassword';

test('User registation', () => {
  const user = new User(1, testingUserName, testingEmail, testingPassword);
  const res = user.register(testingUserName, testingEmail, testingPassword);
  expect(res).toBe(true);
});

test('User login should be successful with matching credentials', () => {
  const user = new User(1, testingUserName, testingEmail, testingPassword);
  user.register(testingUserName, testingEmail, testingPassword);

  expect(user.login(testingEmail, 'testPassword')).toBe(true);
});

test('User login should fail with non-matching credentials', () => {
  const user = new User(1, testingUserName, testingEmail, testingPassword);
  expect(user.login(testingEmail, 'sdsdgsdggsd')).toBe(false);
});

test('User should be able to set experience goal', () => {
  const user = new User(1, testingUserName, testingEmail, testingPassword);
  user.setExperienceGoal(Player, 1, 5000);

  const goal = user.getExperienceGoal(Player, 1);
  expect(goal.goalAmount).toBe(5000);
});

test('User should be able to clear experience goal', () => {
  const user = new User(1, testingUserName, testingEmail, testingPassword);

  // first set
  user.setExperienceGoal(Player, 1, 5000);

  // clear
  user.cancelExperienceGoal(Player, 1);

  const goal = user.getExperienceGoal(Player, 1);

  expect(goal).toBeUndefined();
});

test('User should be able to track player', () => {
  const user = new User(1, testingUserName, testingEmail, testingPassword);
  const res = user.trackPlayer(Player);

  expect(res).toBe(true);
  expect(user.trackedPlayers).toContain(Player);
});

test('User should be able to untrack player', () => {
  const user = new User(1, testingUserName, testingEmail, testingPassword);

  // first track
  user.trackPlayer(Player);

  // then untrack
  user.untrackPlayer(Player);

  expect(user.trackedPlayers).not.toContain(Player);
});
