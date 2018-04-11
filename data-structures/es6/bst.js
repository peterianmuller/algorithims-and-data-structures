class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	// insert

	// check if any nodes exist
		// if false return null
	// check is value is less than current node's value
	  // if true check if current node has a left chilf
	  	// if true recurse on this.left
	  	// if false set left child to a new node with the passed in value
	  // if false check if current node has a right child
	  	// if true recurse on right child
	  	// if false set right child to a new node with the passed in value	

	insert(value) {
		if (!this) {
			return "There must be at least one node in the list";
		} else if (value <= this.value) {
			if (this.left) {
				this.left.insert(value);
			} else {
				this.left = new BST(value);
			}
		} else {
			if (this.right) {
				this.right.insert(value);
			} else {
				this.right = new BST(value);
			}
		}

	}

	// contains

	// check if current node exists
	  // if false return false
	// check if value is equal to current node's value
	  // if true return true
	  // if false check if value is less than current node value
	    // if true recurse on left child
	    // if false recurse on right child

	   // return vs no return in this function. Even when we find the item in this example when we don't return the recursive cases we end up in returning false 

	contains(value) {
	  if (value === this.value) {
			return true;
		} else if (value < this.value && this.left) {
			return this.left.contains(value);
		} else if (this.right) {
			return this.right.contains(value);	
		}	
		console.log('was not found');
		return false;
	}

	// dfs 
		// I -> callback function, order string
		// O -> return value of cb at each node, depending on order
		// C
		// E -> If tree empty return error


		// check if tree exists
			// if false throw new error -> tree must have at least 1 node
		//	


	dfs(cb, order){
		if (!this) {
				throw new Error('Tree must have at least one node');	
		}

		if (order === 'pre-order') {
			cb(this);
		}
		
		if (this.left) {
			this.left.dfs(cb, order);
		}
		
		if (order === 'in-order') {
			cb(this);
		}
		
		if (this.right) {
			this.right.dfs(cb, order);
		}

		if(order === 'post-order') {
			cb(this);
		}

	}

	// bfs

	// I -> cb
	// O -> invocation of cb on each node
	// C -> Must invoke cb on every sibling before invoking cb on children
	// E

	// check if tree is empty
	  // if true throw new error
	// declare local variable queue
	// add first node to queue
  // while queue still has a length
    // remove first node from array and save refernce currentNode to node
    // add node's left child to queue
    // add node's right chil to queue
    // invoke cb on currentNode


	bfs(cb){
		if (!this) {
			throw new Error('Tree must have at least one node');
		}
		let queue = [this];
		while (queue.length){
			let currentNode = queue.shift();
			if (currentNode.left)  {
				queue.push(currentNode.left);
			}	
			if (currentNode.right) {
				queue.push(currentNode.right);
			}
			cb(currentNode);
		}
	}


}