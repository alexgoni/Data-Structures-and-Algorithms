function capitalizeWords(arr) {
  let newArr = [];

  if (arr.length === 0) return [];
  newArr.push(arr[0].toUpperCase());

  return newArr.concat(capitalizeWords(arr.slice(1)));
}

console.log(capitalizeWords(["car", "taco", "banana"]));
