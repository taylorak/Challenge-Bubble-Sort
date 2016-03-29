function bubbleSort() {
  var isSorted = false;
  var count = 0;
  var arrlength = this.length - 1;

  while(!isSorted) {
    var isSorted = true;
    for(var i = 0; i < arrlength; i++) {
      if(this[i + 1] < this[i]) {
        swap(this, i, i + 1);
        var isSorted = false;
        count++;
      }
    }
    arrlength--;
  }
  return count;
}

function bubbleSort2() {
  var count = 0;
  for(var i = this.length - 1; i >= 0; i--) {
    for(var j = 0; j <= i; j++) {
      if(this[j + 1] < this[j]) {
        swap(this, j, j + 1)
        count++;
      }
    }
  }
  return count;
}

function swap(arr, firstIndex, secondIndex) {
  var tmp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = tmp;
}

module.exports = bubbleSort;