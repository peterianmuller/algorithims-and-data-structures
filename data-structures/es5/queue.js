function QueueES5() {
	this.oldestIndex = null;
	this.newestIndex = null;
	this.storage = {};
}

// TODO -> add pseudocode for methods

QueueES5.prototype.enqueue = function(data) {
	if (this.oldestIndex === null) {
		this.oldestIndex = 0;
		this.newestIndex = 0;
		this.storage[this.newestIndex] = data;
		return data;
	}
	this.newestIndex++;
	this.storage[this.newestIndex] = data;
	return data;
};

QueueES5.prototype.dequeue = function() {
	if (this.oldestIndex === null && this.newestIndex === null) {
		return null;
	}
	let oldestItem = this.storage[this.oldestIndex];
	this.oldestIndex++;
	return oldestItem;
};
