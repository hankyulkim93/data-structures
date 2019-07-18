var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.lastCount = 0;
  this.startCount = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.lastCount] = value;
  this.lastCount++;
};

Queue.prototype.dequeue = function() {
  var value = this.storage[this.startCount];
  delete this.storage[this.startCount];
  this.startCount++;
  return value;
};

Queue.prototype.size = function() {
  if (this.lastCount - this.startCount < 0) {
    return 0;
  } else {
    return (this.lastCount - this.startCount);
  }
};