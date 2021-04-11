// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

 class Queue {
  constructor(){
  this.data = [];
  this.top = 0;
  this.size=0;
  this.newList=new ListNode()
}
  
  size () {
    console.log (this.size);
    return this.size;
  
}

enqueue(element) {
  this.data[this.top] = element;
  this.top = this.top + 1;
  this.size++;

  
}

dequeue() {
  if (this.top >0){
          this.top = this.top -1;
          this.size--;
      }

      
      return this.data.shift(); 
  
}

}
const ListNode = require('../extensions/list-node')
const queue = new Queue();

module.exports = Queue;
