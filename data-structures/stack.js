class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }
  peek(){
    const last = this.storage[size];
    return last;
  }
  getSize(){
    return this.size;
  }
  push(data){
    let size = this.getSize();
    this.storage[size] = data;
    this.size++;
  }
}