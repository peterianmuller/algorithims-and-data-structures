// Stacks return the most recently added data

class Stack {
  constructor(){
    this.storage = {};
    this.size = 0;
  }
  size(){
    return this.size;
  }
  peek(){
    if (this.size) {
      return this.storage[this.size];
    }
  }
  push(data){
    this.storage[this.size] = data;
    this.size++;
    return data;
  }
  pop(){
    if (this.size) {
      let mostRecentlyAdded = this.storage[this.size - 1];
      delete this.storage[this.storage[this.size]];
      this.size--;
      return mostRecentlyAdded;
    }
  }
}
