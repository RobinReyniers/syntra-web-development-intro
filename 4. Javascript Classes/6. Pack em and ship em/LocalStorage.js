/**
 * This class is used to store data in the browser's local storage.
 * @class LocalStorage
 * @method get - Get a value from local storage
 * @method set - Set a value in local storage
 * @method remove - Remove a value from local storage
 * @method clear - Clear all values from local storage
 * @method getAll - Get all values from local storage
 *
 * Remember to use JSON.stringify() and JSON.parse() when storing and retrieving objects.
 *
 * @example use the LocalStorage class in our Vanilla Javascript/06 LocalStorage to see if it worked
 */
console.log(window.localStorage.length);
class LocalStorage {
  constructor() {
    this.storage = window.localStorage;
  }

  #getFromLocalStorage(key) {
    const value = window.localStorage.getItem(key);
    try {
      return (value = JSON.parse(value));
    } catch (err) {}

    return value;
  }

  isDefined(value) {
    return value !== undefined || value !== null || value !== NaN;
  }

  get(key) {
    // return JSON.parse(localStorage.getItem(key) || []);
    if (typeof keys === "string") return this.#getFromLocalStorage(keys);
    return Object.entries(keys).reduce((values, [key, defaultValue]) => {
      values[key] = this.#getFromLocalStorage(key) || defaultValue;
    }, {});
  }

  getAll() {
    const archive = [];

    for (let i = 0; i < this.storage.length; i++) {
      const curKey = this.storage.key(i);
      archive[i] = this.get(curKey);
    }

    return archive;
  }

  set(inputValue) {
    for (let [key, value] of Object.entries(keys)) {
      if (typeof value === "object") {
        value = JSON.stringify(value);
      }
      window.localStorage.setItem(key, value);
    }
  }
  // localStorage.setItem(this.storage.length + 1, JSON.stringify(inputValue));

  remove(key) {
    if (this.#getFromLocalStorage(key)) {
      window.localStorage.removeItem(key);
    } else {
      throw new Error("No key found");
    }
  }

  clear() {
    window.localStorage.clear();
  }
}

window.localStorage = LocalStorage;
