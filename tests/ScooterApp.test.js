const Scooter = require("../src/Scooter");
const User = require("../src/User");
const ScooterApp = require("../src/ScooterApp");

// ScooterApp tests here
// register user
describe("ScooterApps register method", () => {
  beforeEach(() => {
    newUser = new User("Peter", "password", 19);
    newScooter = new Scooter("bronx", newUser);
    newApp = new ScooterApp();
  });
  test("checks if user is already registered", () => {
    const oldUser = new User("Peter", "password", 19);
    newApp.registeredUsers[oldUser.username] = {
      password: oldUser.password,
      age: oldUser.age,
      loggedIn: false,
      accountChange: 0,
    };
    let log = jest.spyOn(console, "log");
    newApp.register(newUser);
    expect(log).toHaveBeenCalledWith("already registered!");
  });

  test("checks if user is over 17", () => {
    const youngUser = new User("Jane", "password", 16);
    let log = jest.spyOn(console, "log");
    newApp.register(youngUser);
    expect(log).toHaveBeenCalledWith("too young to register!");
  });

  test("checks user is added to registered users", () => {
    newApp.register(newUser);
    expect(newApp.registeredUsers[newUser.username]).toMatchObject({
      password: newUser.password,
      age: newUser.age,
      loggedIn: false,
      accountChange: 0,
    });
  });

  test("checks user is added and message is logged", () => {
    let log = jest.spyOn(console, "log");
    newApp.register(newUser);
    expect(log).toHaveBeenCalledWith("user has been registered");
  });
});
// log in
describe("ScooterApps log in method", () => {
  beforeEach(() => {
    newUser = new User("Peter", "password", 19);
    newScooter = new Scooter("bronx", newUser);
    newApp = new ScooterApp();
    newApp.register(newUser);
  });

  test("should throw is wrong username", () => {
    expect(() => {
      newApp.logIn("michael", "123456789");
    }).toThrow("Username or password is incorrect.");
  });
  test("should throw if wrong password", () => {
    expect(() => {
      newApp.logIn("Peter", "123456789");
    }).toThrow("Username or password is incorrect.");
  });
  test("should mark user as logged in", () => {
    newApp.logIn("Peter", "password");
    expect(newApp.registeredUsers["Peter"].loggedIn).toBeTruthy();
  });
  test("checks user is logged in and message is logged", () => {
    let log = jest.spyOn(console, "log");
    newApp.logIn("Peter", "password");
    expect(log).toHaveBeenCalledWith("user has logged in successfully");
  });
});
// add scooter
describe("ScooterApps add scooter method", () => {
  beforeEach(() => {
    newUser = new User("Peter", "password", 19);
    newScooter = new Scooter("bronx", newUser);
    newApp = new ScooterApp();
    newApp.register(newUser);
  });
  test("should update the scooter location", () => {
    addScooter("manhattan", newScooter);
    expect(newScooter.station).toMatch("manhattan");
  });
  test("should add scooter to stations list", () => {
    addScooter("manhattan", newScooter);
    expect(newApp.stations["manhattan"]).toContain(newScooter);
  });
});
// remove scooter
