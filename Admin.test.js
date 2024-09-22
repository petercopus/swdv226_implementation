const Admin = require('./classes/Admin');

test('Admin should create user successfully', () => {
  const admin = new Admin(1, 'adminUser', 'admin@gmail.com', 'admin');
  const newUser = admin.createUserAccount('testUser', 'testUser@gmail.com');

  expect(newUser.username).toBe('testUser');
});
