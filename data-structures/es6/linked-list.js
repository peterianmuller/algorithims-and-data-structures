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


 // add

  // create reference nodeToAdd to new node with passed in data
  // check if list is empty
    // if true
      // set head and tail property to nodeToAdd
      // increment length by 1
      // return newly added node
    // otherwise
      // set tail's next property to nodeToAdd
      // set tail property to nodeToAdd
      // increment length property by 1
      // return current tail



  add(data) {
    let nodeToAdd = new Node(data);

    // situation 1 - adding node to empty list

    if (!this.length) {
      this.head = nodeToAdd;
      this.tail = nodeToAdd;
      this.length++;
      return nodeToAdd;
    }

    this.tail.next = nodeToAdd;

    this.tail = nodeToAdd;

    this.length++;

    return this.tail;
  }

  // searchNodeAt

  // declare variable count pointing to 0 and currentNode referencing currentHead
  // check if position parameter is greater than length or if list is empty
    // if true return null
  // declare while loop
    // check if currentNode is valid
      // if true
        // check if count equals position
          // if true
            // return current node
          // if false
            // set current node to reference next property
            // increment count   
  


  searchNodeAt(position) {
    let count = 0, currentNode = this.head;

    if (position > this.length || !this.length) {
      return null;
    }

    while (currentNode) {
      if (count === position) {
        return currentNode;
      }

      currentNode = currentNode.next;

      count++;
    }
  }

  // remove

  // TODO: Move pseudocode outside of function 


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
