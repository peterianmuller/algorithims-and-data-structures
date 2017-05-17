class Stack {
  constructor() {
    this.storage = [];
    this.length = 0;
  }
  peek(){
    const last = this.storage.length - 1;
    return this.storage[last];
  }
  getLength(){
    return this.length;
  }
}