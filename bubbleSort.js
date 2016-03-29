bubbleSort = function() {
  var isSorted = false;
  var count = 0;

  while(!isSorted) {
    var isSorted = true;
    for(var i = 0; i < this.length - 1; i++) {
      if(this[i + 1] < this[i]) {
        var tmp = this[i + 1];
        this[i + 1] = this[i];
        this[i] = tmp;
        var isSorted = false;
        count++;
      }
    }
  }
  return count;
}

module.exports = bubbleSort;