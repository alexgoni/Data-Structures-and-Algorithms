// function isPalindrome(str) {
//   let start = 0;
//   let end = str.length - 1;

//   while (start < end) {
//     if (str[start] !== str[end]) return false;
//     str++;
//     end--;
//   }

//   return true;
// }

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;

  return isPalindrome(str.slice(1, str.length - 1));
}

console.log(isPalindrome("tacocat"));
