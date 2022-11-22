/** Class representing a Queue.
 * @constructor
 */

class Queue {
  constructor() {
    this.storage = [];
  }
  /*
   * Enqueues a new value at the end of the queue
   * @param {*} value the value to enqueue
   */
  enqueue(value) {
    this.storage.push(value);
    return this;
  }

  /*
   * Dequeues the value from the beginning of the queue and returns it
   * @return {*} the first and oldest value in the queue
   */
  dequeue() {
    return this.storage.shift();
  }
  /*
   * Returns the value at the beginning of the queue without removing it from the queue
   * @return {*} the first and oldest value in the queue
   */
  peek() {
    const firstItem = this.storage.shift();
    this.storage.unshift(firstItem);
    return firstItem;
  }
}
