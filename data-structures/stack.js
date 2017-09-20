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
  pop(){
    let size = this.getSize();
    let deletedData = this.storage[size - 1];
    delete this.storage[size - 1];
    this.size--;
    return deletedData;
  }
}