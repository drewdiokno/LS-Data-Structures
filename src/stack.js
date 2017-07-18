class Stack {
  constructor() {
    this.storage = [];
  }
  add(value) {
    return this.storage.push(value);
  }
  remove(value) {
    return this.storage.pop(value);
  }
  get size() {
    return this.storage.length;
  }
}

module.exports = Stack;
