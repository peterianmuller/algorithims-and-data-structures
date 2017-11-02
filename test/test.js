const expect = chai.expect;

describe('Linked List', ()=>{
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
  })
  it('should come with a removeNode method that removes a node at a given position', () => {
    let peteList = new SinglyList();
    expect(peteList.remove(0)).to.eql(null);
    peteList.add(new Node(10));
    expect(peteList.remove(0).val.val).to.eql(10)
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
  it('should come with an add proprty that adds a node and updates the tail property', ()=> {
    let peteList = new SinglyList();
    peteList.add(new Node(0));
    peteList.add(new Node(10));
    expect(peteList.tail.val.val).to.eql(10); 
    expect(peteList.head.val.val).to.eql(0); 
  });
});

describe('Stack', ()=>{
  const myStack = new Stack();
  it('should have a Stack constructor', ()=>{
    expect(Stack).to.be.a('function');
  });
  it('new stack should come with a storage property that points to an empty object', ()=>{
    expect(myStack.storage).to.be.an('object');
  });
  it('should have a peek method that returns the most recently added element', () => {
    expect(myStack.peek).to.be.a('function'); 
  })
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
    it('should have a storage and size property that initialize as {} and 0 respively' , () => {
      let peteQueue = new Queue();
      expect(peteQueue.size()).to.eql(0);
      expect(peteQueue.storage).to.eql({});
    });
    it('should have an enqueue property that adds new data to the storage property', () => {
      let peteQueue = new Queue();
      peteQueue.enqueue(0);
      peteQueue.enqueue(1);
      expect(peteQueue.storage).to.include({'0': 0});
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
      expect(peteQueue.storage).to.eql({'1':1, '2':2, '3':3})
      expect(peteQueue.dequeue()).to.eql(1);
      expect(peteQueue.storage).to.not.include({'1':1});
      expect(peteQueue.storage).to.eql({'2':2, '3':3});
    });
    it('size and storage property should both update when invoking enqueue and dequeue' , () => {
      let peteQueue = new Queue();
      peteQueue.enqueue(0);
      expect(peteQueue.size()).to.eql(1);
      expect(peteQueue.storage).to.eql({'0':0});
      peteQueue.dequeue();
      expect(peteQueue.size()).to.eql(0);
      expect(peteQueue.storage).to.eql({});
    });
  });
