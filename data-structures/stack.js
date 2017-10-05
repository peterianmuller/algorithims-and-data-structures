// Stacks return the most recently added data. LIFO. Stacks are liner data structures that
// only allow us to interact with the most recently added items

class Stack {
  constructor(){
    this.size = 0;
    this.storage = {};  
  }
  push(x){
    this.storage[this.size] = x;
    this.size++;
  }
  pop(){
    if (!this.size) {
      return null; 
    }
    let mostRecentlyAdded = this.storage[this.size-1];
    delete this.storage[this.size-1];
    this.size--;
    return mostRecentlyAdded;
  }
  peek(){
    return this.size ? this.storage[this.size-1] : null; 
  }
}
