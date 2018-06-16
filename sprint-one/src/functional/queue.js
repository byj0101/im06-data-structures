var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[count] = value;
    count ++;
  };

  someInstance.dequeue = function() {
    var num = Object.values(storage)[0];
    delete storage[Object.keys(storage)[0]];
    return num;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

