const User = require("../src/User");

// User tests here
describe("Checks the properties of user", () => {
  beforeEach(() => {
    newUser = new User("John", "123456789", 23);
  });
  // test username
  test("should set the username", () => {
    expect(newUser.username).toMatch("John");
  });
  // test password
  test("should set the username", () => {
    expect(newUser.password).toMatch("123456789");
  });
  // test age
  test("should set the username", () => {
    expect(newUser.age).toBe(23);
  });
});
