function getDigit(num, place) {
  return Math.floor((Math.abs(num) / 10 ** place) % 10);
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let max = nums[0];

  for (const each of nums) {
    if (each > max) max = each;
  }

  return digitCount(max);
}

function radixSort(arr) {
  for (let i = 0; i < mostDigits(arr); i++) {
    const bucket = Array.from({ length: 10 }, () => []);

    for (const each of arr) {
      bucket[getDigit(each, i)].push(each);
    }

    arr = [].concat(...bucket);
  }

  return arr;
}

console.log(radixSort([1, 10, 123, 43241, 43262346, 3233, 2221]));
