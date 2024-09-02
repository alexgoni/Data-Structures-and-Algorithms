// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   const sortedArr1 = [...str1].sort();
//   const sortedArr2 = [...str2].sort();

//   for (let i = 0; i < sortedArr1.length; i++) {
//     if (sortedArr2[i] !== sortedArr1[i]) return false;
//   }

//   return true;
// }

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  [...str1].forEach((each) => {
    frequencyCounter1[each] = (frequencyCounter1[each] || 0) + 1;
  });

  [...str2].forEach((each) => {
    frequencyCounter2[each] = (frequencyCounter2[each] || 0) + 1;
  });

  for (const key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }

  return true;
}
