# Description

A collection of data structures in pseudoclassical instantiation and ES6 class notation

# Usage
Run npm install to inport mocha and chai as dependencies

# Notes on Data Structures

Shout out to Naz Khan for the [excellent article on bst](https://hackernoon.com/data-structures-in-javascript-pt-1-binary-search-trees-2c231cf2c8e1)

Binary Search Trees
- Because binary seach trees consist of nested nodes, we tend to use recursion to traverse the nodes that make up the tree.
- BST's are binary trees that have the requirement that each left child node must be less than the parent node and each right child node must be greater than the parent node

- breath first traversal (bft) vs depth first traversal (dft)

bft uses a queue in order to keep track of the nodes that we want to visit. We add the root node to the queue, and then any nodes to the root's left or right properties.

Pseudocode for bft

declare var queue pointing to an array with the this value
while queue has a length
	use shift to grab element at index 0 in queue and save reference to it as node
	invoke call back on that element
	check if node.left exists
		if so add it to the back of the queue
	check if node.right exists
	  if so add it to the back of the queue	

Note that we don't need to recurse. The while loop will continue to add nodes further down the tree via the checks for node.left and node.right. Also the focal node changes for each iteration, from line 22	  




