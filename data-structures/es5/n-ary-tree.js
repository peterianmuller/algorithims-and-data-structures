
var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(value) {
  let node = new Tree(value);
  this.children.push(node);
};

Tree.prototype.BFS = function(cb) {
  // create queue
  let queue = [];

  //add first node to queue
  queue.push(this);

  while (queue.length > 0) {
    // shift off element from queue
    let current = queue.shift();
    cb(current);
    queue = queue.concat(current.children);
  }
};

Tree.prototype.DFS = function(cb) {
  if (!this) {
    throw new Error();
  }
  if (this.children) {
    for (let i = 0; i < this.children.length; i++) {
      let child = this.children[i];
      child.DFS(cb);
    }
  } else {
    cb(this);
  }
};

module.exports = Tree;
