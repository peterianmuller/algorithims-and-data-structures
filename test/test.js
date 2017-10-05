const expect = chai.expect;

describe('Linked List', ()=>{
  const node = new Node(10);
  const singleList = new SinglyList();
  it('should come with a Node constructor that has a value and next property', () => {
    expect(node.val).to.eql(10); 
    expect(node.next).to.eql(null);   
  });  
})

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
