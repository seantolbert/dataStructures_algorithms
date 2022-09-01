// queue classes

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // push
  enqueue(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  // pop
  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

let queue = new Queue()
queue.enqueue("first")
queue.enqueue("second")
queue.enqueue("third")

// then

queue.dequeue()
queue.dequeue()
queue.dequeue() // null







// you can implement them with arrays

let q = [];
q.push("first");
q.push("second");
q.push("third");

// we need to remove them from the array in the same order they are labeled

q.shift();
q.shift();
q.shift();

// adding them from the front (unshift) will need to be reciprocated with pop()

q.unshift("first");
q.unshift("second");
q.unshift("third");

q.pop();
q.pop();
q.pop();
