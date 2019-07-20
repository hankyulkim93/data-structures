var HashTable = function() {
  this._limit = 8; // ceiling limit # for bucket array
  this._storage = LimitedArray(this._limit);
  
};

HashTable.prototype.insert = function(k, v) { // k = key, v = value
  var index = getIndexBelowMaxForKey(k, this._limit); //used hash function to get index value
  var tuple = [k, v];
  var bucket = this._storage.get(index);
  if (!Array.isArray(bucket)) {
    bucket = [];
  }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i] = tuple;
    }
  }
  bucket.push(tuple);
  this._storage.set(index, bucket);   
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currBucket = this._storage.get(index);
  for (var i = 0; i < currBucket.length; i++) {
    if (currBucket[i][0] === k) {
      return currBucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var byeBucket = this._storage.get(index);
  for (var i = 0; i < byeBucket.length; i++) {
    if ( byeBucket[i][0] === k) {
      byeBucket.splice(i, 1);
    }  
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


