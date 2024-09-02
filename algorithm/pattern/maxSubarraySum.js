const checkTime = require("../../snippets/check-time");

// function maxSubarraySum(arr, n) {
//   if (arr.length < n) return null;

//   let max = Number.NEGATIVE_INFINITY;

//   for (let i = 0; i < arr.length; i++) {
//     const window = arr.slice(i, i + n);
//     const sum = window.reduce((a, c) => a + c, 0);
//     if (max < sum) max = sum;
//   }

//   return max;
// }

function maxSubarraySum(arr, n) {
  if (arr.length < n) return null;

  const window = arr.slice(0, n);
  let max = window.reduce((a, c) => a + c, 0);
  let temp = max;

  for (let i = 0; i < arr.length - n; i++) {
    temp = temp - arr[i] + arr[n + i];
    if (max < temp) max = temp;
  }

  return max;
}

checkTime(maxSubarraySum([4, 2, 1, 6, 2], 4));
