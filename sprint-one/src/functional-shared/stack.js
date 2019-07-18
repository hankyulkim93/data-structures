var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var sameInstance = {
    storage: {},
    count: 0,
  };
  _.extend(sameInstance, stackMethods);

  return sameInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },

  pop: function() {
    if (this.count > 0) {
      this.count--;
      var value = this.storage[this.count];
      delete this.storage[this.count];
      return value;
    }
  },

  size: function() {
    return this.count;
  }
};