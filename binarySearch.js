function binarySearch(data,num,start,end) {
  if (start > end) {
    return false;
  }
  var index = Math.floor((start + end) / 2);
  if (data[index] == num) {
    return index;
  }
  if (data[index] > num) {
    return binarySearch(data,num,start,index - 1);
  } else {
    return binarySearch(data,num,index + 1,end);
  }
  return false;
}

var arr = [1,3,5,7,9];
console.log(binarySearch(arr,3,0,arr.length - 1));
