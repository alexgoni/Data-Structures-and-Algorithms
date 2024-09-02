function pivot(arr, start = 0, end = arr.length - 1) {
  const pivotEl = arr[start];
  let pivotIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivotEl) {
      pivotIdx++;
      [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]];
    }
  }

  [arr[start], arr[pivotIdx]] = [arr[pivotIdx], arr[start]];
  return pivotIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;
  let pivotIdx = pivot(arr, left, right);
  quickSort(arr, left, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, right);

  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
