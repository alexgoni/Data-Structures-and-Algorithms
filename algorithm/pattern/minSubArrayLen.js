function minSubArrayLen(arr, n) {
  let minLen = Number.POSITIVE_INFINITY;
  let sum = 0;
  let start = 0;
  let end = 0;

  while (start < arr.length) {
    if (sum < n && end < arr.length) {
      sum += arr[end];
      end++;
    } else if (sum >= n) {
      minLen = Math.min(minLen, end - start);
      sum -= arr[start];
      start++;
    } else break;
  }

  return minLen === Number.POSITIVE_INFINITY ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
