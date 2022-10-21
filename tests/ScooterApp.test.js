const Scooter = require("../src/Scooter");
const User = require("../src/User");
const ScooterApp = require("../src/ScooterApp");

// ScooterApp tests here
describe("ScooterApps methods", () => {
  beforeEach(() => {
    newUser = new User("Peter", "password", 19);
    newScooter = new Scooter("bronx", newUser);
    newApp = new ScooterApp();
  });
  // register user
  test("check if user is already registered", () => {
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

  test("check if user is over 17", () => {
    const youngUser = new User("Jane", "password", 16);
    let log = jest.spyOn(console, "log");
    newApp.register(youngUser);
    expect(log).toHaveBeenCalledWith("too young to register!");
  });

  test("user is added to registered users", () => {
    newApp.register(newUser);
    expect(newApp.registeredUsers[newUser.username]).toMatchObject({
      password: newUser.password,
      age: newUser.age,
      loggedIn: false,
      accountChange: 0,
    });
  });

  test("user is added and message is looged", () => {
    let log = jest.spyOn(console, "log");
    newApp.register(newUser);
    expect(log).toHaveBeenCalledWith("user has been registered");
  });
  // log in

  // add scooter

  // remove scooter
});
