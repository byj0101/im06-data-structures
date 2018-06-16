var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    count: 0,
  };
  extend(someInstance, queueMethods);
  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count ++;
};

queueMethods.dequeue = function() {
  var num = Object.values(this.storage)[0];
  delete this.storage[Object.keys(this.storage)[0]];
  return num;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};
