// LinkedLists are data structures that hold a sequence of linked nodes. Each node contains data and a pointer, which can point to another node. Like a scavenger hunt

// each node contains info about a step or a place in the scavenger hunt - "You've reached B Town!" and the pointer has a memory location to go to the next place. Because each node needs the ability to store data and point to the next place we use the data property to store our data and the next property to say "hey, go here next"


// Time Complexity:

// Average:
  // Search O(n) - might have to search entire list for the last item
  // Access O(n) - might have to search entire list for last item
  // Insertion is O(1) because we just add to the front of the list
  // 


class Node {
  constructor(data){
    this.val = data;
    this.next = null;
  }
  getVal(){
    return this.val;
  }  
}

class SinglyList {
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // add(val) - adds a node to the list
  add(x){
    let nodeToAdd = new Node(x);
    // check if list is empty
    if (!this.head) {

      this.head = nodeToAdd; 
      this.tail = nodeToAdd;
      this.length++;    

    } else {
    // already a node.

    // save reference to old tail  
    let currentNode = this.tail; 

    // make next property of current tail point to new node
    currentNode.next = nodeToAdd;

    //make tail property point to new node
    this.tail = nodeToAdd; 
        

    //increment length
    this.length++;
    }
  }

  // searchNodeAt(position) - searches for a node at n-poisition in the list
  searchNodeAt(n){
    // find node at n position
    // check if this.length is less than n
    if (this.length < n || this.length === 0) {
      // if true return null
      return null;
    }
      // if false
        // create counter pointing to zero
    let counter = 0, currentNode = this.head;  
        // start iterating at this.head
    while (currentNode) {
      // when coutner === n
      if (counter === n) {
        // return this.val
        return currentNode;
      }
      currentNode = currentNode.next;
      // increment by one and add one to counter
      counter++;
    }    

  }

  // remove(position) - remove node at a certain position
  remove(position) {
    
    // check if position is > length
    if (position > this.length || !this.length) {
      // if true return null;
      return null;
    }

    // if removing head
      // set this.head to this.head.next
    if (position === 0) {
      let oldHead = this.head;
      this.head = this.head.next;
      this.length--;
      return oldHead;
    }  

    // if false
    // initialize counter variable set to 0 and reference to currentNode    
    let counter = 0, currentNode = this.head;  
  
  // iterate over nodes in list
   while(currentNode) {
    
    // when counter === position - 1
    if (counter === position - 1) {
      let nodeToRemove = currentNode.next;
      
      // make current node's next property point to the current node's next next property.
      currentNode.next = currentNode.next.next;

      this.length--;
      return nodeToRemove;
    }
   }     

  }
}