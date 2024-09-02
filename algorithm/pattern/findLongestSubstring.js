function findLongestSubstring(str) {
  let start = 0;
  let maxLen = 0;
  const charObj = {};

  for (let i = 0; i < str.length; i++) {
    if (charObj[str[i]]) start = Math.max(start, charObj[str[i]]);
    charObj[str[i]] = i + 1;
    maxLen = Math.max(maxLen, i + 1 - start);
  }

  return maxLen;
}

console.log(findLongestSubstring("longestsubstring"));
