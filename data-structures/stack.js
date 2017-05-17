class Stack {
  constructor() {
    this.storage = [];
  }
  peek(){
    const last = this.storage.length - 1;
    return this.storage[last];
  }
}