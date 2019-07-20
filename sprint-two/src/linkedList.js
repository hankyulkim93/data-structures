var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addToTail = function(value) { // add node & set it to tail.
  //LinkedList tail should equal to whatever node(w/ value) is being added.
  
    var newNode = Node(value);
    
    if (list.head === null) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;

  };

  list.removeHead = function() { //remove node that head is pointing to and redirect head to next node in sequence (if applicable).
      // var tempVar = list.head.value; //need figure out how to return just the value of list.head
    var oldHead = list.head.value;
    list.head = list.head.next;
    
    return oldHead;

  };

  list.contains = function(target) {
  
    var currNode = list.head;
    
    while (currNode) {
      if (target === currNode.value) {
        return true;
      } else {
        currNode = currNode.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
