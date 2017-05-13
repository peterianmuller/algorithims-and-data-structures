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
})