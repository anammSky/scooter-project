const User = require("../src/User");

// User tests here
describe("Checks the properties of user", () => {
  beforeEach(() => {
    newUser = new User("John", "123456789", 23);
  });
  // test username
  test("should get the username", () => {
    expect(newUser.username).toMatch("John");
  });
  test("should set the username", () => {
    expect((newUser.username = "Mike")).toMatch("Mike");
  });
  // test password
  test("should get the password", () => {
    expect(newUser.password).toMatch("123456789");
  });
  test("should set the password", () => {
    expect((newUser.password = "qwerty")).toMatch("qwerty");
  });

  // test age
  test("should get the age", () => {
    expect(newUser.age).toBe(23);
  });
  test("should set the age", () => {
    expect((newUser.age = 21)).toBe(21);
  });
});
