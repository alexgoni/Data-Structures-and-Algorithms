function naiveStringSearch(longStr, shortStr) {
  if (shortStr.length > longStr.length)
    throw new Error(
      "첫 번째 인수에는 긴 문자열, 두 번째 인수에는 짧은 문자열을 넣어주세요."
    );
  let count = 0;

  for (let i = 0; i < longStr.length - shortStr.length + 1; i++) {
    for (let j = 0; j < shortStr.length; j++) {
      if (longStr[i + j] !== shortStr[j]) break;
      if (j === shortStr.length - 1) count++;
    }
  }

  return count;
}

console.log(naiveStringSearch("wowomgzomg", "omg"));
