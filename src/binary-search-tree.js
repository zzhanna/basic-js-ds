const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using node from extensions
*/
module.exports = class BinarySearchTree {

  constructor() {
    this.valRoot = null;
  }
  root() {
    return this.valRoot;
}

  add(data) {
    this.valRoot = addWithin(this.valRoot, data);

    function addWithin(node, data){
      if(!node){
        return new Node(data);
      }
        if (node.data === data) {
          return node;
        }

      if (data < node.data){
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return this.find(data) ? true : false;
  }
    

  find(data) {
    return findNode(this.valRoot, data);

    function findNode(node,data){
      if(!node) return null;
      if (node.data === data) return node;
          if(data < node.data){
            return findNode(node.left, data);
          } else {
            return findNode(node.right, data);
          } 
        }
}

  remove(data) {
    this.valRoot = removeNode(this.valRoot, data);

function removeNode (node, data){
  if(!node) return null;
  if(data < node.data){
    node.left = removeNode(node.left, data);
    return node;
  } else if (data > node.data) {
    node.right =  removeNode(node.right, data);
    return node;
  } else if(data === node.data){
    if (!node.left && !node.right){
    return null;
  }
}

if (!node.left) {
  node = node.right;
  return node;
}

if(!node.right){
  node = node.left;
  return node;
}

let minFromRight = node.right;
while (minFromRight.left){
  minFromRight = minFromRight.left;

node.data = minFromRight.data;
node.right = removeNode(node.right, minFromRight.data);
return node;
}
}
}

  min() {
if(!this.valRoot) {
  return null;
}
let node = this.valRoot;
while(node.left){
  node = node.left;
}
return node.data;
}
  

  max() {
    if(!this.valRoot) {
      return null;
    }
let node = this.valRoot;
while(node.right){
  node = node.right;
}
return node.data;
  }
}