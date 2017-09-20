const expect = chai.expect;

describe('Linked List', ()=>{
  it('should create a new instance of a linked list', ()=>{
    expect(LinkedList).to.be.a('function');  
  });
  it('should create a linked list with initial head and tail pointers to null', ()=>{
    const list = new LinkedList();
    expect(list.tail).to.eql(null);
    expect(list.head).to.eql(null);
  });
  it('should have a Node method that creates a new instance of a node with a value property passed in and a next property that points to null', ()=>{
    const node = new Node(5);
    expect(node.value).to.eql(5);
    expect(node.next).to.eql(null); 
  });
  it('should have a addToTail method', ()=>{
    const list = new LinkedList();
    expect(list.tail).to.eql(null);

    list.addToTail(9);
    expect(list.tail.value).to.eql(9);
    expect(list.count).to.eql(1);

    list.addToTail(11);
    expect(list.tail.value).to.eql(11);
    
    expect(list.count).to.eql(2);

  });
  it('should have a removeHead method', () => {
    
    const list = new LinkedList();
    list.addToTail(0);
    list.addToTail(100);
    expect(list.head.value).to.eql(0);
    list.removeHead();
    expect(list.head.value).to.eql(100);

    const emptyList = new LinkedList();
    expect(emptyList.head).to.eql(null);

    expect(emptyList.removeHead()).to.eql(null);

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


});