class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

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
}

console.log('test');
