// var twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length; i++) {
//       let cur = nums[i];
//       for(let j = i + 1; j < nums.length; j++) {
//         if(cur + nums[j] === target) {
//           return [i, j]
//         }
//       }
//     }
// };
var map = {
  '2': 0,
  '7': 1,
  '11': 2,
  '5': 3
}
var twoSum = function(nums, target) { 
  var obj = {};
  for(let i = 0; i < nums.length; i++) {
    // 给所有的数建立map
    obj[nums[i]] = i;
  }
  for(let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    let anthorNum = target - cur;
    if (obj[anthorNum] !== undefined && obj[anthorNum] !== i) {
      return [i, obj[anthorNum]]
    }
  }
}
var numsList = [3,2,4];
var targetList = 6;
console.log(twoSum(numsList, targetList)) 
// 优化 if else
// let map1 = new Map();