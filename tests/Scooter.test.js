const Scooter = require("../src/Scooter");
const User = require("../src/User");

describe("Scooter object is created correctly", () => {
  beforeEach(() => {
    newUser = new User("Mary", "qwerty", 53);
    newScooter = new Scooter("bronx", newUser);
  });
  test("should update station property to bronx", () => {
    expect(newScooter.station).toMatch("bronx");
  });
  test("should update with user object", () => {
    expect(newScooter.user).toBeInstanceOf(User);
  });
  test("serial should be and integer", () => {
    expect(typeof newScooter.serial).toBe("number");
  });
  test("serial should be greater than 1", () => {
    expect(newScooter.serial).toBeGreaterThan(0);
  });
  test("serial should be less than or equalt to 100", () => {
    expect(newScooter.serial).toBeLessThanOrEqual(100);
  });

  test("charge should be and integer", () => {
    expect(typeof newScooter.charge).toBe("number");
  });
  test("charge should be greater than 1", () => {
    expect(newScooter.charge).toBeGreaterThan(0);
  });
  test("charge should be less than or equalt to 100", () => {
    expect(newScooter.charge).toBeLessThanOrEqual(100);
  });
  test("isBroken is initialised as false", () => {
    expect(newScooter.isBroken).toBeFalsy();
  });
  test("docked is initialised as true", () => {
    expect(newScooter.docked).toBeTruthy();
  });
});

//Method tests
describe("scooter methods", () => {
  // tests here!

  //rent method

  //dock method

  //requestRepair method

  //charge method
  test("charge", async () => {
    const newScooter = new Scooter();
    await newScooter.recharge(); // we need to wait for the charge!
    expect(newScooter.charge).toBe(100);
  });
});
