function isSubsequence(str1, str2) {
  if (str1.length > str2.length) return false;

  let i = 0;
  let j = 0;

  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }

  return i === str1.length;
}

console.log(isSubsequence("abc", "abracadabra"));
