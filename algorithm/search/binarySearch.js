function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const midPoint = Math.floor((left + right) / 2);
    if (arr[midPoint] === target) return midPoint;
    if (arr[midPoint] < target) left = midPoint + 1;
    if (arr[midPoint] > target) right = midPoint - 1;
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 5));
