function QueueES5(){
	this.oldestIndex = null;
	this.newestIndex = null;
	this.storage = {};
}

QueueES5.prototype.enqueue = function(data){
	// add something to empty queue
	if (!this.oldestIndex) {
  	this.oldestIndex = 0;
  	this.newestIndex = 0;
  	this.storage[0] = data;
  	return data;		
	}
  this.newestIndex++;
  this.storage[this.newestIndex] = data;
  return data;
}
