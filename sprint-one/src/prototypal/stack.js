var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;
};

var extend = function(to, from){
  for(var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

stackMethods.pop = function() {
  var num = this.storage[this.count];
  if(this.count > 0){
      this.count--;
  }
  return num;
};

stackMethods.size = function() {
  return this.count;
};
