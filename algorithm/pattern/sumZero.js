const checkTime = require("../snippets/check-time");

// function sumZero(arr) {
//   arr.sort((a, b) => a - b);

//   for (const each of arr) {
//     if (each >= 0) return undefined;
//     if (arr.includes(-1 * each)) return [each, -1 * each];
//   }

//   return undefined;
// }

function sumZero(arr) {
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] > 0) right--;
    if (arr[left] + arr[right] < 0) left++;
    if (arr[left] + arr[right] === 0) return [arr[left], arr[right]];
  }

  return undefined;
}

checkTime(sumZero([-3, -2, -1, 0, 1, 2, 3]));
