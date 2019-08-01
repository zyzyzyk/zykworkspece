// var arr = new Array();
// arr[0] = 5;
// arr[1] = 9;
// arr[2] = 10;
// arr[3] = 6;
// arr[4] = 2;

// arr.sort(function(a, b) {
//   return b - a
// });
// console.log(arr);
function findKthLargest(nums, k) {
  if (k < 0 || k > nums.length - 1) return NaN;
  return nums.sort((a, b) => b - a)[k-1];
}
console.log(findKthLargest([5,9,10,6,2], 2))