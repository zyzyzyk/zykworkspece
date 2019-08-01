// function palindrome(str) {
//   // var str1 = str.replace(number, "");
//   // var str1 = str.split("");
//   // var str2 = str1.reverse();
//   // var str3 = str2.join("");
//   // return str1 = str3;;
//   if(!str || typeof str != 'string') return false
//   return str.split("").reverse().join("") === str
// }
// console.log(palindrome("ahahahahah"))

// function palindrome(str) {
//   var str1 = str.toLowerCase("");
//   var r = /[\w\_]/g;
//   var str2 = str1.replace(r, "");
//   var str3 = str2.split("");
//   var str4 = str3.reverse();
//   var str5 = str4.join("");
//   return str = str5;
// }
//  console.log(palindrome("A man, a plan, a canal: Panama"))
var isValidChar = (c) => {
  return /^[\w]$/.test(c)
}
var isPalindrom = (s) => {
  s = toLowerCase();
  let left = 0,
      right = s.length - 1;
  while(left < right) {
    if(!isValidChar(s[left])) {
      left++;
      continue;
    }
    if(!isValidChar(s[right])){
      right--;
      continue;
    }
    if(s[left] == s[right]){
      left++;
      right--;
    }else {
      break;
    }
  } 
  return right <= left
}