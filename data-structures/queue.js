class queue {
	constructor(){
		this.size = 0;
		this.storage = {};
	}
	enqueue(data){
    this.storage[this.size] = data;
    this.size++;
	}
	dequeue(){
		// check if value to return
		if (this.storage) {
		// save reference to first item
		let first = this.storage[0];

    // delete the first item
    delete this.storage[0];

    console.log('size is', this.size);
		// iterate over current storage object
		
		for (var key in this.storage) {
		  // reassign each item to key minus 1
			  this.storage[key - 1] = this.storage[key];
		}

		// delete last property in this.storage
		delete this.storage[this.size - 1];

    // decrement size;
    this.size--;

		// return last item
		return first;
	  }
	  return null;
	}
}

