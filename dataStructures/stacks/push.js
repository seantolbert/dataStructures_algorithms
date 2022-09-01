// similar to singly linked list unshift

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        // should accept a value
        // create a new node with val arg
        let newNode = new Node(val)
        // if there are no nodes in the stack
        if (this.size === 0) {
            // set the first and last properties to the newNode
            this.first = newNode;
            this.last = newNode;
        } else {
            // create a variable that stores the current first property on the stack
            let temp = this.first;
            // reset the first property to be the newNode
            this.first = newNode;
            // set the next property on the node to be the previously made variable
            this.first.next = temp;
        }
        // increment and return the size
        return ++this.size;
    }
}

let stack = new Stack()
stack.push("how")
stack.push("we")
stack.push("stackin")
stack.push("foos")