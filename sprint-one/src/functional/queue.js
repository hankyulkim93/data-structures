var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var lastCount = 0;
  var startCount = 0;

  someInstance.enqueue = function(value) {
    storage[lastCount] = value;
    lastCount++;
  };

  someInstance.dequeue = function() {
    var value = storage[startCount];
    delete storage[startCount];
    startCount++;
    return value;
  };

  someInstance.size = function() {
    if (lastCount - startCount < 0) {
      return 0;
    } else {
      return (lastCount - startCount);
    }
  };

  return someInstance;
};
