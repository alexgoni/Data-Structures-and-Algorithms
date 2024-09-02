const checkTime = require("../../snippets/check-time");

// function countUniqueValues(arr) {
//   const set = new Set(arr);
//   return set.size;
// }

// function countUniqueValues(arr) {
//   const frequencyCounter = {};

//   arr.forEach((each) => {
//     frequencyCounter[each] = (frequencyCounter[each] || 0) + 1;
//   });

//   return Object.keys(frequencyCounter).length;
// }

function countUniqueValues(arr) {
  if (arr.length <= 1) return arr.length;

  let i = 0;

  for (j = 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

checkTime(console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])));
