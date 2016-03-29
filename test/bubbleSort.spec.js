var bubbleSort = require('../bubbleSort');
Array.prototype.bubbleSort = bubbleSort;
var chai = require('chai');
var expect = chai.expect;

describe('Bubble Sort', function() {
  var unsortedArray;
  var sortedArray = [1, 2 , 3, 4, 5];

  beforeEach(function() {
    unsortedArray = [5, 4, 3 , 2, 1]
  })

  it('should be a method of the Array object', function() {
    expect(Array.prototype.bubbleSort).to.be.a('function');
  })

  it('should take an input Array and apply the bubble sort', function() {
    unsortedArray.bubbleSort();
    expect(unsortedArray).to.deep.equal(sortedArray);
  })

  it('should return the number of moves that were necessary to sort Array', function() {
    expect(unsortedArray.bubbleSort()).to.equal(10);
  })
})