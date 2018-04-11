// A stack is a data structure that adds items and that can only remove the most recently added item

function StackES5() {
  this.size = 0;
  this.storage = {};
}

// add method

// check if stack is empty
  // if true add value to storage and then increment size
// return val  

StackES5.prototype.add = function(val) {
  this.storage[this.size] = val;
  this.size++;
  return val;
};

// remove method

// check if stack is empty
  // if true return null
  // if false
    // save reference to property at current size
    // remove property
    // decrement size by 1
// return removed property

StackES5.prototype.remove = function() {
  if (!this.size) {
    return null;
  }

  var newestAdded = this.storage[this.size - 1];
  delete this.storage[this.size - 1];

  this.size--;
  return newestAdded;
};
