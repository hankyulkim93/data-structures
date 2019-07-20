var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  //newTree.children is an array.

  extend(newTree, treeMethods);

  return newTree;
};

var extend = function(to, from ) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //get Tree(value)
  //push Tree(value) to children array
  var newNode = Tree(value);
  this.children.push(newNode);
};

treeMethods.contains = function(target) {

  if (target === this.value) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) { 
      if (target === this.children[i].value || this.children[i].contains(target) === true) {
        return true;
      } else {
        this.children[i].contains(target);
      }
    }
  }
  return false;
};

var tree = Tree();

tree.addChild(5); ``
tree.addChild(6);
tree.children[0].addChild(7);
tree.children[1].addChild(8);
tree.contains(7);
tree.contains(8);
// we could use recursion to improve this
/*
 * Complexity: What is the time complexity of the above functions?
 */
