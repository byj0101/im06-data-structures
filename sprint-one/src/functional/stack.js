var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    count++;
    storage[count] = value;
  };

  someInstance.pop = function() {
    var num = storage[count];
    if(count > 0){
        count--;
    }
    return num;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
