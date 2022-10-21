const Scooter = require("../src/Scooter");
const User = require("../src/User");

//Property tests
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
  beforeEach(() => {
    newUser = new User("Mary", "qwerty", 53);
    newScooter = new Scooter("bronx", newUser);
  });
  //rent method
  test("should rent scooter if not broken and charge is over 20", () => {
    newScooter.charge = 25;
    newScooter.isBroken = false;

    let log = jest.spyOn(console, "log");
    newScooter.rent();
    expect(log).toHaveBeenCalledWith("Enjoy the ride!");
  });
  test("rent throws when charge 20 or under", () => {
    newScooter.charge = 15;
    expect(() => {
      newScooter.rent();
    }).toThrow("Scooter low on battery, please charge.");
  });
  test("rent throws when broken", () => {
    newScooter.charge = 30;
    newScooter.isBroken = true;
    expect(() => {
      newScooter.rent();
    }).toThrow("Scooter is broken, please send a repair request.");
  });

  //dock method
  test("station is updated", () => {
    newScooter.dock("queens");
    expect(newScooter.station).toMatch("queens");
  });
  test("station is updated", () => {
    newScooter.dock("queens");
    expect(newScooter.docked).toBeTruthy();
  });
  test("station is updated", () => {
    newScooter.dock("queens");
    expect(newScooter.user).toMatch("");
  });
  test("throws if no station provided", () => {
    expect(() => {
      newScooter.dock();
    }).toThrow("Docking station required!");
  });

  //requestRepair method
  test("scooter charges to 100", async () => {
    const newScooter = new Scooter();
    await newScooter.requestRepair(); // we need to wait for the charge!
    expect(newScooter.isBroken).toBeFalsy();
  });

  //recharge method
  test("scooter charges to 100", async () => {
    const newScooter = new Scooter();
    await newScooter.recharge(); // we need to wait for the charge!
    expect(newScooter.charge).toBe(100);
  });
});
