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
  constructor() {
    this.data = [];
    this.top = 0;
    this.size = 0;
    // eslint-disable-next-line no-use-before-define
    this.newList = new ListNode();
  }

  size () {
    return this.size;
  }
  // let newlist = new ListNode(arr[0]);
  //     let newNode = newlist;
  //     for(let i = 1; i < arr.length; i++){

  //         newNode.next = new ListNode(arr[i]);
  //         newNode = newNode.next;

  //     }
  enqueue(element) {
    this.data[this.top] = element;
    this.top += 1;
    // this.size++;
  }

  dequeue() {
    if (this.top > 0) {
      this.top -= 1;
      // this.size--;
    }

    // console.log (this.data.shift());
    return this.data.shift();
  }
}
const ListNode = require('../extensions/list-node');

// eslint-disable-next-line no-unused-vars
const queue = new Queue();

module.exports = Queue;