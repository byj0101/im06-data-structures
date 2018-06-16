var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me

  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from){
  for(var key in from) {
    to[key] = from[key];
  }
};


var treeMethods = {};

treeMethods.addChild = function(value) {
  var trees = new Tree(value);
  this.children.push(trees);
};

treeMethods.contains = function(target) {
  var boolean = false;
  var recur = function(node){
    if(node.value === target) boolean = true;
      for(var i = 0; i<node.children.length; i++){
          recur(node.children[i]);
        }
  };
  recur(this);
  return boolean;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
