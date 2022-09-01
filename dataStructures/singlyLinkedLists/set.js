// get() retrieves a node by its position in the linked list

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null; // or undefined
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    // should accept an index and value
    // use the .get() method to find the specific
    let setNode = this.get(index);
    // if node is found,
    if (setNode) {
      // set the value of that node to the value passed in and return true
      setNode.val = val;
      return true;
    }
    // if the node is not found retuern false
    return false;
  }
}

let list = new SinglyLinkedList();
list.push("hello");
list.push("goodbye");
list.push("!");
