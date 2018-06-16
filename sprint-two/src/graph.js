

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
  this.count = 0;
  this.obj = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[this.count] = node;
  this.count ++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for(var key in this.storage){
    if(this.storage[key] === node) return true;
  }
    return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for(var key in this.storage){
    if(this.storage[key] === node) delete this.storage[key] ;
  }
  delete this.obj[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for(var key in this.obj){
    if((key === fromNode.toString() && this.obj[key] === toNode) ||
      (key === toNode.toString() && this.obj[key] === fromNode)) {
        return true;
    }
  }
    return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.obj[fromNode] = toNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for(var key in this.obj){
    if((key === fromNode.toString() && this.obj[key] === toNode) ||
      (key === toNode.toString() && this.obj[key] === fromNode)){
      delete this.obj[key];
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var list = Object.values(this.storage);
  return _.each(list, function(item){
    return cb(item);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
