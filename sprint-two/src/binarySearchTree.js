var BinarySearchTree = function(value) {
  var list = {};

  list.left = null; 
  list.right = null;
  list.value = value; 

  list.insert = function(value) {
    if (value > this.value) {
      this.right === null ? this.right = BinarySearchTree(value) : this.right.insert(value);
    } else {
      this.left === null ? this.left = BinarySearchTree(value) : this.left.insert(value);
    }
  };

  list.contains = function(target) {
    var boolean = false;

    var recur = function(list) {
      if (list.value === target) {
        boolean = true;
      }
      for (var key in list) {
        if (list[key] !== null) {recur(list[key]);}
        else {return boolean;}
      }
    };
    recur(this);
    return boolean;
  };


  list.depthFirstLog = function(cb) {
    var obj = {};
    var count = 0;
    var rec = function(list) {
      obj[count++] = list.value;
      if (list.left !== null) {rec(list.left);}
      if (list.right !== null) {rec(list.right);}
    };
    rec(this);

    _.each(obj, function(item) {
      return cb(item);
    });
  };

  return list;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
binarySearchTree = new BinarySearchTree(5);
binarySearchTree.insert(2);
// binarySearchTree.insert(3);
// binarySearchTree.insert(7);
// binarySearchTree.insert(6);
console.log(binarySearchTree);