/** Class representing a Stack. */

class Stack {
  constructor() {
    this.#storage = [];
  }
  /*
   * Adds a new value at the end of the stack
   * @param {*} value the value to push
   */
  push(value) {
    this.#storage.push(value);
    return this;
  }

  /*
   * Removes the value at the end of the stack and returns it
   * @return {*} the last and newest value in the stack
   */
  pop() {
    return this.#storage.pop();
  }
  /*
   * Returns the value at the end of the stack without removing it
   * @return {*} the last and newest value in the stack
   */
  peek() {
    const lastItem = this.#storage.pop();
    this.#storage.push(lastItem);
    return lastItem;
  }
}

const myStack = new Stack();

console.log(myStack);
