// Stacks return the most recently added data. LIFO. Stacks are linera data structures that
// only allow us to interact with the most recently added items

class Stack {
  constructor(){
    this.size = 0;
    this.storage = {};
  }
  // push method adds new data to this.storage at the current size prop. Increments size 
  // after adding data so that we can have items 0-indexed
  push(x){
    this.storage[this.size] = x;
    this.size++;
  }
  //pop removes items from the storage property. Note that we need to account for empty
  // storage properties. We also need to decrement size
  pop(){
    if (this.storage) {
      let mostRecentlyAdded = this.storage[this.size-1];
      delete this.storage[this.size-1];
      this.size--;
      return mostRecentlyAdded;
    }
    return null;
  }
  peek(){
    if(this.storage){
      return this.storage[this.size-1];
    }
  }
}

