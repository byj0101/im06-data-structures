var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

Stack.prototype.pop = function() {
  var num = this.storage[this.count];
  if(this.count > 0){
      this.count--;
  }
  return num;
};

Stack.prototype.size = function() {
  return this.count;
};
