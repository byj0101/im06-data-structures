var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value) {
    var node = new Node(value);
    if (list.head === null && list.tail === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    list.head = list.head.next;
    return list.tail.value;
  };

  list.contains = function(target) {
    var temp = list.head;
    while (temp !== null) {
      if (temp.value === target) {return true;}
      temp = temp.next;
    } return false;
  };

  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var linkedList = LinkedList();
linkedList.addToTail(5);
linkedList.addToTail(4);
linkedList.addToTail(3);

console.log(linkedList);

/*
 * Complexity: What is the time complexity of the above functions?
 */
