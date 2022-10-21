class User {
  #username;
  #password;
  #age;
  constructor(username, password, age) {
    this.#username = username; //validate?
    this.#password = password; // validate?
    this.#age = age;
  }
  set username(username) {
    this.#username = username;
  }

  get username() {
    return this.#username;
  }

  set password(password) {
    this.#password = password;
  }

  get password() {
    return this.#password;
  }

  set age(age) {
    this.#age = age;
  }

  get age() {
    return this.#age;
  }
}

module.exports = User;
