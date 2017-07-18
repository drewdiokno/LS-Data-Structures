class Queue {
  constructor() {
    this.storage = [];
  }
  enqueue(value) {
    return this.storage.push(value);
  }
  dequeue(value) {
    return this.storage.shift(value);
  }
  get size() {
    return this.storage.length;
  }
}

module.exports = Queue;
