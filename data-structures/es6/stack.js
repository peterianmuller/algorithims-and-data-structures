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
