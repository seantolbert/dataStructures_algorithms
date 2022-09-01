// insert() adding a node to a list at a specified position

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
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== current) {
      current = current.next;
      counter++;
    }
    return current;
  }
  insert(index, val) {
    // accepts an index and a value
    // create a new node
    let newNode = new Node(val);
    // if the index is less than zero or greater than the length return false
    if (index < 0 || index > this.length) return false;
    // if the index is the same as the length, use push and return true
    // the !! converts the method to a boolean for success or failure
    if (index === this.length) return !!this.push(val);
    // if the index is 0, use unshift and return true
    if (index === 0) return !!this.unshift(val);
    // otherwise
    // use the get method to access the node at index - 1
    let scootedNode = this.get(index - 1);
    // set the next property on the new node to the previous next
    newNode.next = scootedNode.next;
    // set the next property on the original node to the new node
    scootedNode.next = newNode;
    // increment length
    this.length++;
    // return true
    return true;
  }
}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("there");
list.push("how");
list.push("are");
list.push("you");
