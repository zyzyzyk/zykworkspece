// [1, 2, 3, 4, 5] 2
// 排序 nLogn 已排序好的时候 二分查找法

// 递归算法
function binarySearch(arr, data, start, end) {
  var start = start || 0;
  var end = end || arr.length - 1;
  var mid = Math.floor((start + end) / 2);
  if(data === arr[mid]) {
    return mid;
  }else if(data >= arr[mid]) {
    return binarySearch(arr, data, mid+1, end)
  }else {
    return binarySearch(arr, data, start, mid-1);
  }
  // return false
}
var arr = [1,2,3,4,5,6];
console.log(binarySearch(arr, 3));