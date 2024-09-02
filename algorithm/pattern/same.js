const checkTime = require("../../snippets/check-time");

// function same(firstArr, secondArr) {
//   if (firstArr.length !== secondArr.length) return false;

//   const sortedFirstArr = firstArr.sort((a, b) => a - b);
//   const sortedSecondArr = secondArr.sort((a, b) => a - b);

//   const multiflySortedFirstArr = sortedFirstArr.map((each) =>
//     Math.pow(each, 2)
//   );

//   for (let i = 0; i < multiflySortedFirstArr.length; i++) {
//     if (multiflySortedFirstArr[i] !== sortedSecondArr[i]) return false;
//   }

//   return true;
// }

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  arr1.forEach((each) => {
    frequencyCounter1[each] = (frequencyCounter1[each] || 0) + 1;
  });

  arr2.forEach((each) => {
    frequencyCounter2[each] = (frequencyCounter2[each] || 0) + 1;
  });

  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) return false;
  }

  return true;
}

checkTime(console.log(same([1, 2, 3, 2], [9, 4, 1, 4])));
