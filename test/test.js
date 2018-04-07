const expect = chai.expect;

describe('es6 class style', () => {
  describe('Linked List', () => {
    const node = new Node(10);
    const singleList = new SinglyList();
    it('should come with a Node constructor that has a value and next property', () => {
      expect(node.val).to.eql(10);
      expect(node.next).to.eql(null);
    });
    it('should come with a SinglyList constructor that has a length, head, and tail property', () => {
      expect(singleList.length).to.eql(0);
      expect(singleList.head).to.eql(null);
      let peteList = new SinglyList();
      peteList.add(node);
      expect(peteList.length).to.eql(1);
      expect(peteList.head.next).to.eql(null);
      expect(peteList.head.val.val).to.eql(10);
      let anotherNode = new Node(15);
      peteList.add(anotherNode);
      expect(peteList.length).to.eql(2);
      let thirdNode = new Node(-100);
      peteList.add(thirdNode);
      expect(peteList.length).to.eql(3);
      expect(peteList.head.next.val.val).to.eql(15);
    });
    it('should come with a searchNodeAt method that returns a node at passed-in position', () => {
      let peteList = new SinglyList();
      expect(peteList.searchNodeAt(0)).to.eql(null);
      peteList.add(node);
      peteList.add(new Node(15));
      expect(peteList.searchNodeAt(1).val.val).to.eql(15);
      peteList.add(new Node(-199));
      expect(peteList.searchNodeAt(2).val.val).to.eql(-199);
      expect(peteList.searchNodeAt(2).val.next).to.eql(null);
    });
    it('should come with a removeNode method that removes a node at a given position', () => {
      let peteList = new SinglyList();
      expect(peteList.remove(0)).to.eql(null);
      peteList.add(new Node(10));
      expect(peteList.remove(0).val.val).to.eql(10);
      expect(peteList.tail).to.eql(null);
      peteList.add(new Node(50));
      peteList.add(new Node(100));
      expect(peteList.head.val.val).to.eql(50);
      expect(peteList.tail.val.val).to.eql(100);
      expect(peteList.remove(0).val.val).to.eql(50);
      expect(peteList.head.val.val).to.eql(100);
      expect(peteList.tail.val.val).to.eql(100);
      expect(peteList.length).to.eql(1);
      peteList.add(new Node(1000));
      peteList.add(new Node(2000));
      expect(peteList.tail.val.val).to.eql(2000);
      expect(peteList.length).to.eql(3);
      expect(peteList.remove(1).val.val).to.eql(1000);
      peteList.add(new Node(3000));
      peteList.add(new Node(4000));
      peteList.add(new Node(5000));
      console.log(peteList);
      //expect(peteList.remove(4).val.val).to.eql(3000);
    });
    it('should come with an add proprty that adds a node and updates the tail property', () => {
      let peteList = new SinglyList();
      peteList.add(new Node(0));
      peteList.add(new Node(10));
      expect(peteList.tail.val.val).to.eql(10);
      expect(peteList.head.val.val).to.eql(0);
    });
  });

  describe('Stack', () => {
    const myStack = new Stack();
    it('should have a Stack constructor', () => {
      expect(Stack).to.be.a('function');
    });
    it('new stack should come with a storage property that points to an empty object', () => {
      expect(myStack.storage).to.be.an('object');
    });
    it('should have a peek method that returns the most recently added element', () => {
      expect(myStack.peek).to.be.a('function');
    });
    it('should have a push method that adds new data to the storage property', () => {
      myStack.push(0);
      expect(myStack.storage.hasOwnProperty('0')).to.eql(true);
      expect(myStack.storage[myStack.size - 1]).to.eql(0);
      myStack.push(1);
      expect(myStack.storage.hasOwnProperty('1')).to.eql(true);
      expect(myStack.storage[myStack.size - 1]).to.eql(1);
    });
    it('should have a pop method that removes the most recently added data from storage property, updates size, and returns removed data', () => {
      let peteStack = new Stack();
      peteStack.push(0);
      peteStack.push(1);
      expect(peteStack.pop).to.be.a('function');
      expect(peteStack.size).to.eql(2);
      let mostRecentlyAdded = peteStack.pop();
      expect(mostRecentlyAdded).to.eql(1);
      expect(peteStack.size).to.eql(1);
    });
  });

  describe('Queue', () => {
    it('should have a storage and size property that initialize as {} and 0 respively', () => {
      let peteQueue = new Queue();
      expect(peteQueue.size()).to.eql(0);
      expect(peteQueue.storage).to.eql({});
    });
    it('should have an enqueue property that adds new data to the storage property', () => {
      let peteQueue = new Queue();
      peteQueue.enqueue(0);
      peteQueue.enqueue(1);
      expect(peteQueue.storage).to.include({ '0': 0 });
      peteQueue.enqueue(2);
      expect(peteQueue.size()).to.eql(3);
    });
    it('should have a dequeue property that removes the 1st item we pass in', () => {
      let peteQueue = new Queue();
      peteQueue.enqueue(0);
      peteQueue.enqueue(1);
      peteQueue.enqueue(2);
      peteQueue.enqueue(3);
      expect(peteQueue.dequeue()).to.eql(0);
      expect(peteQueue.storage).to.eql({ '1': 1, '2': 2, '3': 3 });
      expect(peteQueue.dequeue()).to.eql(1);
      expect(peteQueue.storage).to.not.include({ '1': 1 });
      expect(peteQueue.storage).to.eql({ '2': 2, '3': 3 });
    });
    it('size and storage property should both update when invoking enqueue and dequeue', () => {
      let peteQueue = new Queue();
      peteQueue.enqueue(0);
      expect(peteQueue.size()).to.eql(1);
      expect(peteQueue.storage).to.eql({ '0': 0 });
      peteQueue.dequeue();
      expect(peteQueue.size()).to.eql(0);
      expect(peteQueue.storage).to.eql({});
    });
  });

  describe('Binary search tree', () => {
    let bst = new BST(0);
    it('should come with a BST constructor that has a value, left, and right property', () => {
      expect(bst.value).to.eql(0);
      expect(bst.left).to.eql(null);
      expect(bst.right).to.eql(null);
    });
    it('should come with an insert method that inserts nodes that are less than current node on left subtree and nodes that are greater than the current node to the right of the current node', () => {
      bst.insert(-10);
      bst.insert(5);
      expect(bst.left.value).to.eql(-10);
      expect(bst.right.value).to.eql(5);
      bst.insert(-11);
      bst.insert(-2);
      bst.insert(-1);
      bst.insert(-1);
    });
    it('should come with a contains function that checks if a target element is present in the BST', () => {
      console.log('bst is:', bst);
      expect(bst.contains(-10)).to.eql(true);
      expect(bst.contains(-100)).to.eql(false);
      expect(bst.contains(0)).to.eql(true);
      expect(bst.contains(600)).to.eql(false);
    });
    it('should come with a breath first search function that accpets callback and order paramenetrs', () => {
      let easyBst = new BST(5);
      easyBst.insert(4);
      easyBst.insert(4.5);
      easyBst.insert(3);
      easyBst.insert(2);
      easyBst.insert(6);
      easyBst.insert(7);

      console.log(easyBst);

      let log = function(val) {
        console.log(val);
      };

      // 'pre-order' means we invoke the cb on the current node, than the first left child until the leaf, than the right children
      // console.log(easyBst.dfs(log, 'pre-order'));

      //'in-order' means we invoke the callback on the left leaf, than the root, then the right subtree
      // console.log(easyBst.dfs(log, 'in-order'));

      // 'post-order' means we invoke left leaf than go up left sub tree, then right left than traverse up right usb tree than hit root
      console.log(easyBst.dfs(log, 'post-order'));
    });
  });
});

describe('es5 prototypal pattern', () => {
  let stack = new StackES5();
  let queue = new QueueES5();
  describe('stack', () => {
    it('constructor should return a function', () => {
      expect(StackES5).to.be.a('function');
    });
    it('should come with built in size and storage properties', () => {
      expect(stack.size).to.equal(0);
      expect(stack.storage).to.eql({});
    });
    it('should come with an add method that updates the storage and size properties', () => {
      expect(stack.size).to.equal(0);
      stack.add(0);
      stack.add(1);
      expect(stack.size).to.equal(2);
    });
    it('should come with an remove method that  removes the most recently added item and updates the storage and size properties', () => {
      let stack = new StackES5();
      expect(stack.size).to.equal(0);
      stack.add(0);
      stack.add(1);
      expect(stack.size).to.equal(2);
      expect(stack.remove()).to.equal(1);
      expect(stack.size).to.equal(1);
    });
  });
  describe('queue', () => {
    it('constructor should return a function', () => {
      expect(QueueES5).to.be.a('function');
    });
    it('New instances should come with a newestIndex, oldestIndex, and storage property', () => {
      expect(queue.oldestIndex).to.eql(null);
      expect(queue.newestIndex).to.eql(null);
      expect(queue.storage).to.eql({});
    });
    it('should come with an enqueue method that adds a new item to the queue', () => {
      let peteQueue = new QueueES5();
      expect(peteQueue.oldestIndex).to.eql(null);
      peteQueue.enqueue(10);
      expect(peteQueue.storage['0']).to.eql(10);
      peteQueue.enqueue(20);
      expect(peteQueue.storage['0']).to.eql(10);
      expect(peteQueue.storage['1']).to.eql(20);
      expect(peteQueue.storage['2']).to.eql(undefined);
    });
    it('should come with an dequeue method that removes the least recently added item from the queue', () => {
      let peteQueue = new QueueES5();
      console.log(peteQueue);
      expect(peteQueue.dequeue()).to.eql(null);
      peteQueue.enqueue(10);
      peteQueue.enqueue(20);
      peteQueue.enqueue(30);
      expect(peteQueue.dequeue()).to.eql(10);
      expect(peteQueue.dequeue()).to.eql(20);
      expect(peteQueue.dequeue()).to.eql(30);
      expect(peteQueue.dequeue()).to.eql(undefined);
    });
  });
});
