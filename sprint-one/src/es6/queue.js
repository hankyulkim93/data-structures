class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.lastCount = 0;
    this.firstCount = 0;
  }

  enqueue(value) {
    this.storage[this.lastCount] = value;
    this.lastCount++;
  }

  dequeue() {
    var value = this.storage[this.firstCount];
    delete this.storage[this.firstCount];
    this.firstCount++;
    return value;
  }

  size() {
    if (this.lastCount - this.firstCount < 0) {
      return 0;
    } else {
      return this.lastCount - this.firstCount;
    }
  }
}