

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var obj = {};
  obj[k] = v;
  if (this._storage.get(index)) {
    this._storage.get(index)[k] = v;
  } else {this._storage.set(index, obj);}
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var key in this._storage.get(index)) {
    if (key === k) {delete this._storage.get(index)[k];}
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
