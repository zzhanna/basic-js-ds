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
  this.valRoot = removeInNode(this.valRoot, data);

  function removeInNode(node, data) {
    if (!node) return null;

    if (data < node.data) {
      node.left = removeInNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = removeInNode(node.right, data);
      return node;
    } else if (data === node.data) {
      if (!node.left && !node.right) return null;
    }

    if (!node.left){
       return node.right;
    }
    if (!node.right) {
      return node.left;
    }

    let minRightNode = node.right;
    while (minRightNode.left) {
    minRightNode = minRightNode.left;    
  }
    node.data = minRightNode.data;
    node.right = removeInNode(node.right, minRightNode.data);
    return node;
  }
}



  min() {
if(!this.valRoot) {
  return null;
}
let node = this.valRoot;
while(node.left)
  node = node.left;
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