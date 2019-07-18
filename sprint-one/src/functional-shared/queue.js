var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var sameInstance = {
    storage: {},
    lastCount: 0,
    startCount: 0
  };
  _.extend(sameInstance, queueMethods);

  return sameInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.lastCount] = value;
    this.lastCount++;
  },

  dequeue: function() {
    var value = this.storage[this.startCount];
    delete this.storage[this.startCount];
    this.startCount++;
    return value;
  },

  size: function() {
    if (this.lastCount - this.startCount < 0) {
      return 0;
    } else {
      return (this.lastCount - this.startCount);
    }
  }
};


