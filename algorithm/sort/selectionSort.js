// function selectionSort(arr) {
//   const newArr = [];

//   const helper = (arr) => {
//     if (arr.length === 0) return;

//     let minIdx = 0;

//     for (let i = 1; i < arr.length; i++) {
//       if (arr[minIdx] > arr[i]) minIdx = i;
//     }
//     if (minIdx !== 0) [arr[0], arr[minIdx]] = [arr[minIdx], arr[0]];

//     newArr.push(arr[0]);
//     helper(arr.slice(1));
//   };

//   helper(arr);
//   return newArr;
// }

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) minIdx = j;
    }

    if (i !== minIdx) [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }

  return arr;
}

console.log(selectionSort([5, 4, 3, 2, 1]));
