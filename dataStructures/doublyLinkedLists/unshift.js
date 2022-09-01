// unshift adds a new node to the beginning of the list

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  unshift(val) {
    // create a new node with passed in value
    let newNode = new Node(val)
    // if length is 0
    if (!this.head) {
        // set head to be new node
        this.head = newNode;
        // set tail to be new node
        this.tail = newNode;
        // otherwise
    } else {
        // set prev property on the head of the list to be the new node
        this.head.prev = newNode;
        // set the next property of the new node to be the old head
        newNode.next = this.head;
        // update the head to be the new node
        this.head = newNode
    }
    // increment the length
    this.length++;
    // return list
    return this;
  }
}


let list = new DoublyLinkedList();
list.push("Hey");
list.push("there");
list.push("my");
list.push("double");
list.push("dude");