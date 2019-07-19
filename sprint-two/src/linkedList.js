var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;
  
  list.addToTail = function(value) { // add node & set it to tail.
  //LinkedList tail should equal to whatever node(w/ value) is being added.
    // if (list.head = null) { // if very first node added, then give value to tail and equal it to head

    // var oldTail = list.tail;
    // list.tail = Node(value);
    // if (list.head = null) {
    //   list.head = list.tail;
    //   list.head.next = oldTail;
    // } else if (list.head != null) {
    //   oldTail.next = list.tail;
    // }
    
    //   var newHead = list.tail;
    //   var oldTail = list.tail;
    // } else { // if NOT very first node added, then need to give value to tail node but not overwrite previous tail PLUS give head non-null value.
    //   list.head = newHead;
    //     if (list.length === 1) {
    //       list.tail = Node(value);
    //       list.head.next = list.tail;
    //       // var bleh = list.tail.next;
    //     } else if (list.length > 1) {
    //       list.tail.next = Node(value);
    //       list.tail = list.tail.next;
    //     }
    // }
    list.length ++; // add count to list (UNNECESSARY?)
  };

  list.removeHead = function() { //remove node that head is pointing to and redirect head to next node in sequence (if applicable).
      // var tempVar = list.head.value; //need figure out how to return just the value of list.head
      // delete list.head;
    var tempVar = list.head.value;
    return tempVar;
    list.length --;
  };

  list.contains = function(target) {
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
