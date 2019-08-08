var str = 'aaaabbbeeeghghghsakk';
// 出现次数最多 a
function getMax() {
  let hash = {}, // hash表
    max = 0, maxstr;
  for(let i = 0; i < str.length; i++){
    // hash有i吗
    // 有加1
    // 没有 1
    let char = str[i];
    if(!hash[char]) {
      // 没有
      hash[char] = 1;
    }else {
      hash[char]++;
    }
    if(hash[char] > max) {
      max = hash[char];
      maxstr = char;
    }
  }
  return maxstr;
}
console.log(getMax(str));