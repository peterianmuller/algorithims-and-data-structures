// linked list. A Linked list is a data structure that is made up of Nodes that
// are objects with a data property and a next property. Linked Lists differ from arrays because they are collections of data that are not contiguous blocks of memory. They are non-contigous so that thier nodes can be stored all over the system without needing to reserve a set block of memory.

// I will be using both a head and tail proerty so that insertion is O(1).

// Time and Space complexity:

// Insertion O(1)
// Deletion O(1) - assuming you have access to node. The actual act of deletion does not require any reshuffling of other nodes in the system
// Search O(n)
// Access O(n)

// Node constructor

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// singlyList constructor

class SinglyList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  add(data) {
    let nodeToAdd = new Node(data);

    // situation 1 - adding node to empty list

    if (!this.length) {
      this.head = nodeToAdd;
      this.tail = nodeToAdd;
      this.length++;
      return nodeToAdd;
    }

    // situation 2 - adding node to non-empty list

    // update current tail property's next property to point to new node
    this.tail.next = nodeToAdd;

    // update tail to point to new node
    this.tail = nodeToAdd;

    //update length
    this.length++;

    return this.tail;
  }

  searchNodeAt(position) {
    let count = 0,
      currentNode = this.head;

    // check if valid position or empty list
    if (position > this.length || !this.length) {
      return null;
    }

    // if valid position
    // start at head
    while (currentNode) {
      //check if we've found node at target position
      if (count === position) {
        return currentNode;
      }

      // if not keep iterating
      currentNode = currentNode.next;

      //increment count
      count++;
    }
  }

  remove(position) {
    let count = 0,
      currentNode = this.head,
      beforeNodeToDelete = null,
      nodeToDelete = null;

    // check if trying to remove node that isn't in list
    if (position > this.length || !this.length) {
      return null;
    }

    // situation 1 - removing this.head
    if (!position) {
      let oldHead = this.head;

      //only one node in list
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length--;
        return oldHead;
      }

      // more than 1 node in list
      this.head = this.head.next;
      this.length--;
      return oldHead;
    }

    while (count < position) {

      beforeNodeToDelete = currentNode;
      nodeToDelete = currentNode.next;

      count++;
    }

    let nodeToRemove = currentNode.next;

    currentNode.next = currentNode.next.next;

    // if we are removing tail re assign tail to node that comes before old tail
    if (count + 1 === this.length) {
      this.tail = currentNode;
    }

    return nodeToRemove;
  }
}
