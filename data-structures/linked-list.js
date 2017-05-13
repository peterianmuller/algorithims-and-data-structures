class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.count = 0;  
  } 
  addToTail(val){
    const newTail = new Node(val);

      // check if empty list 
    if (!this.head) {
      this.head = newTail;  
    }

    if (this.tail) {
      // if there is a tail already, point the current tail's next property to the new node
      this.tail.next = newTail;
    }

    this.tail = newTail;
    this.count++;
  }
  removeHead(){
    if (!this.head) {
      return null;
    }
    const oldHead = this.head;
    this.head = oldHead.next;
    this.count--;
  }
}


class Node {
  constructor(val){
    this.value = val;
    this.next = null;
  }
}