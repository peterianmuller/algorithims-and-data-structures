class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	// Insert time complexity is O(log n), because we can ignore certain trees when inserting.
	// Question -> does this move any nodes? Doesn't need to because as long as each node's insertion follows the rules, then we can trust that each additional node will fall into place

	insert(value) {
		if (value <= this.value) {
			if (!this.left) {
				this.left = new BST(value);
			} else {
				this.left.insert(value);
			}
		} else {
			if (!this.right) {
				this.right = new BST(value);
			} else {
				this.right.insert(value);
			}
		}
	}

	contains(target) {
		if (!this) {
			return false;
		}
		if (target < this.value && this.left) {
			return this.left.contains(target);
		} else if (target > this.value && this.right) {
			return this.right.contains(target);
		} else {
			if (target === this.value) {
				console.log(this);
				return true;
			}
			return false;
		}
	}
}

console.log('test');
