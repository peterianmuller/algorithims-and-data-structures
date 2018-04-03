'use strict'

var Tree = function(val){
  this.val = val;
  this.children = [];
}

Tree.prototype.addChild = function(val) {
  let node = new Tree(val);
  this.children.push(node);
}

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

}  

module.exports = Tree;
