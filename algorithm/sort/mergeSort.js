function merge(arr1, arr2) {
  const newArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    }
    if (arr1[i] > arr2[j]) {
      newArr.push(arr2[j]);
      j++;
    }
  }

  if (i === arr1.length) newArr.push(...arr2.slice(j));
  if (j === arr2.length) newArr.push(...arr1.slice(i));

  return newArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const midIdx = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, midIdx));
  const right = mergeSort(arr.slice(midIdx));
  return merge(left, right);
}

console.log(mergeSort([5, 4, 2, 1, 3]));
