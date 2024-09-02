function sameFrequency(num1, num2) {
  if (num1.length !== num2.length) return false;

  const arr1 = [...String(num1)];
  const arr2 = [...String(num2)];

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  arr1.forEach((each) => {
    frequencyCounter1[each] = (frequencyCounter1[each] || 0) + 1;
  });

  arr2.forEach((each) => {
    frequencyCounter2[each] = (frequencyCounter2[each] || 0) + 1;
  });

  for (const key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }

  return true;
}

console.log(sameFrequency(3589578, 5879385));
