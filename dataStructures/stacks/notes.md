Stacks are considered LIFO structures or **LAST IN FIRST OUT**

The last element added to the stack will be the first element removed from the stack

stacks are used:
- to manage function invocations
- undo / redo
- routing (the history object)

how to implement stacks as arrays

useing push and pop array ,methods on stacks 
work because they are both adding and removing items from the
end of the stack
same goes for shift and unshift as long as we are only working from the same side of the array

implementing stacks as a singly linked list

much more efficient than array implementation

Big O:

- insertion - O(1)
- removal - O(1)
- searching - O(n)
- access - O(n)