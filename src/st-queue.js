const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.head = null;
    this.next = null;
    this.index = 0;
  }
 
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
  if(!this.index){
    this.head = new ListNode(value);
  } else {
    let currentElement = this.head;
    while(currentElement.next){
      currentElement = currentElement.next;
    }
    currentElement.next = new ListNode(value);
  }
  this.index++;
  }

  dequeue() {    
    if(!this.index) {
      return null;
    }
    let currentElement = this.head;
    if(this.head === this.next){
      this.next = null;
    }
    this.head = this.head.next;
    this.index--;  
    return currentElement.value;   
  }
}
