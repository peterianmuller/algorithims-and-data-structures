function QueueES5(){
	this.oldestIndex = null;
	this.newestIndex = null;
	this.storage = {};
}

QueueES5.prototype.enqueue = function(data){
	// add something to empty queue
	if (this.oldestIndex === null) {
  	this.oldestIndex = 0;
  	this.newestIndex = 0;
  	this.storage[this.newestIndex] = data;
  	return data;		
	}
  this.newestIndex++;
  this.storage[this.newestIndex] = data;
  return data;
}

QueueES5.prototype.dequeue = function(){
	// if empty queue return null
	if (this.oldestIndex === null && this.newestIndex === null) {
  	return null; 
	} 

	// If not empty
	// what if we don't delete from storage but instead move our pointers
	var oldestItem = this.storage[this.oldestIndex];
	this.oldestIndex++;
	return oldestItem;
}
