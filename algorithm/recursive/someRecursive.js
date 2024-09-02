function someRecursive(arr, callback) {
  if (arr.length === 0) return false;
  if (callback(arr[0])) return true;
  else return someRecursive(arr.slice(1), callback);
}

console.log(someRecursive([4, 6, 8], (val) => val > 10));
