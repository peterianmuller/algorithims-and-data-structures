// uses of queues - in JS event loop. Events get added as event listeners trigger. 
// First function triggered runs first.
// We can also thing of a queue as a customer line in a deli


class Queue {
	constructor(){
		this.oldestIndex = 1;
		this.newestIndex = 1;
		this.storage = {};
	}
	size(){
		return this.newestIndex - this.oldestIndex;
	}
	enqueue(data){
		this.storage[this.newestIndex] = data;
		this.newestIndex++;
	}
	dequeue(){ 
		if (this.size) {
		  let oldestItem = this.storage[this.oldestIndex];
		  delete this.storage[this.oldestIndex];
		  this.oldestIndex++;
		  return oldestItem;
	  }
	}
}



