function averagePair(arr, average) {
  const target = average * 2;

  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (arr[i] + arr[j] > target) j--;
    if (arr[i] + arr[j] < target) i++;
    if (arr[i] + arr[j] === target) return true;
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
