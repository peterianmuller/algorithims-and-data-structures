// bst
  // bst made up of nodes with a value.
  // each node has a left and right property that also can point to nodes
  // each parent node's value property must be greater than it's left node's value property and less than it's right node's value property

  //insertion O(log n)


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
}




