class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }
  peek(){
    const last = this.storage[size];
    return last;
  }
  getLength(){
    return this.size;
  }
  push(data){
    this.size++;
    let size = this.getSize();
    this.storage[size] = data;
  }
}