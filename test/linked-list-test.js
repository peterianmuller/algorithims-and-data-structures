//var chai = require('chai');
var expect = chai.expect;

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
  it('should have a addToTail method that correctly updates the tail property of the list', ()=>{
    const list = new LinkedList();
    expect(list.tail).to.eql(null);

    list.addToTail(9);
    expect(list.tail.value).to.eql(9);

    list.addToTail(11);
    expect(list.tail.value).to.eql(11);
  });
})