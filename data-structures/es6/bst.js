// bst
  // bst made up of nodes with a value.
  // each node has a left and right property that also can point to nodes
  // each parent node's value property must be greater than it's left node's value property and less than it's right node's value property

  // insertion O(log n)
  // contains O(log n)
    // this means that we can eliminate the possibilities by 1/2 each time we recurse. We can decide at the beginning of our insertion or contains if we'll visit the left-hand side of the BST or the left-hand side of the BST


  // insert pseudocode 
  // check if value argument is less than current node's value
    // if true
      // check if this.left exists
        // if it does invoke this.left.insert and pass in value
    		// else assign this.left to new node 
    // if false
      // check if this.right exists
        // if true invoke this.right.insert and pass in value
        // else assign this.right to new node		   
    
// contains

// check if value equals current node's value property
  // if true return true
// check if value is less than current node's value property
  // if true check if current node has a left property
    // if true invoke contains on node at left property
    // if false return false
  // if false check if current node has a right property
    // if turue invoke contains on node at right property
    // if false invoke contains on nade at left property


 // traversing tree
 
 // depth-first-traversal -> you start at the root node and traverse a branch all the way down to the bottom most node or leaf node. 

 // I -> callback
 // O -> value of callback on each node
 // C -> must visit bottom most node before the sibling node
 // E  

 // dfs
 // check if this.left exists
   // if true invoke dfs on this.left
 // invoke callback on current node (this)
 // check if this.right exists
   // if true invoke dfs on this.right

 // breath-first search
 // referred to as bfs

 // I -> callback
 // O -> value of callback invoked on each node
 // C -> must visit each sibling node before reaching leaves
 // E

 // check if this.node exists
   // if false return
 // declare queue variable pointing to []
 // add this.left, and this.right to queue
 // while queue has a length greater than 0 
 	// unshift first element (node) from queue
 	  // invoke callback on node
 // invoke bfs on this.left	  


  


 



class BinarySearchTreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	insert(value){
		let node = new BinarySearchTreeNode(value);
		if (value <= this.value) {
			if (!this.left) {
				this.left = node;
			} else {
				this.left.insert(value);
			}
		} else {
			if (!this.right) {
				this.right = node;
			} else {
				this.right.insert(value);
			}
		}
	}

	contains(value){
		if (value === this.value) {
			return true;
		} else if (value < this.value) {
			if (this.left) {
				return this.left.contains(value);
			} else {
				return false;
			}
		} else {
			if (this.right) {
        return this.right.contains(value);
			} else {
				return false;
			}
		}
	}

	dft(callback){
		if (this.left) {
			this.left.dfs(callback)
		} 
		callback(this)
		if (this.right) {
			this.right.dfs(callback);
		} 
	}

	bft(cb) {
	  let queue = [this];
	  while(queue.length) {
	  	let node = queue.shift();
      cb(node)
      if (node.left) {
      	queue.push(node.left)
      }
      if (node.right) {
      	queue.push(node.right);
      }
	  }
	}



}

let peteTree = new BinarySearchTreeNode(25);
peteTree.insert(20);
peteTree.insert(36);
peteTree.insert(10);
peteTree.insert(22);
peteTree.insert(30);
peteTree.insert(40);

log = (node) => {
	console.log(node.value);
}

//peteTree.dft(log);
peteTree.bft(log);

//console.log([1,2,3].shift());




