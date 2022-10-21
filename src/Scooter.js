class Scooter {
  constructor(station, user) {
    this._station = station;
    // this.station = validateStation(station);
    this._user = user;
    this._serial = Scooter.generateNumber();
    this._charge = Scooter.generateNumber();
    this._isBroken = false;
    this._docked = true;
  }
  set station(station) {
    this._station = station;
  }
  get station() {
    return this._station;
  }

  set user(user) {
    this._user = user;
  }
  get user() {
    return this._user;
  }

  get serial() {
    return this._serial;
  }

  set charge(charge) {
    this._charge = charge;
  }
  get charge() {
    return this._charge;
  }

  set isBroken(boolean) {
    this._isBroken = boolean;
  }
  get isBroken() {
    return this._isBroken;
  }

  set docked(boolean) {
    this._docked = boolean;
  }
  get docked() {
    return this._docked;
  }

  rent() {
    // If isBroken is set to false, and charge is > 20, then set docked to false, and log to the console, “Enjoy the ride!”.
    if (!this.isBroken && this.charge > 20) {
      console.log("Enjoy the ride!");
    }
    // If charge is <= 20, throw an error that messages: “Scooter low on battery, please charge.”
    else if (this.charge <= 20) {
      throw "Scooter low on battery, please charge.";
    }
    // If none of these are applicable, you should throw an error that states that: “Scooter is broken, please send a repair request.”
    else {
      throw "Scooter is broken, please send a repair request.";
    }
  }

  dock(station) {
    // Sets the station property of the Scooter to the argument passed in
    // If no argument is passed in, you should throw an error: “Docking station required!”
    if (!station) {
      throw "Docking station required!";
    } else {
      this.station = station;
      // Set docked to true
      this.docked = true;
      // Set user to an empty string
      this.user = "";
    }
  }

  async recharge() {
    // This method should update the Scooter’s charge to 100.
    console.log("Starting charge");

    await new Promise((resolve) => setTimeout(resolve, 2000)); // wait 2 seconds
    this.charge = 100;

    console.log("Charge complete");
  }

  async requestRepair() {
    // Uses a setInterval timer to log a message that the repair has been complete
    console.log("Starting repair");

    await new Promise((resolve) => setTimeout(resolve, 2000)); // wait 2 seconds
    // Sets isBroken to false after the repair has been complete.
    this.isBroken = false;

    console.log("Repair complete");
  }

  static generateNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
}

module.exports = Scooter;
