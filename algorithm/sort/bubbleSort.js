function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapFlag = false;

    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapFlag = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }

    if (!swapFlag) break;
  }

  return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
