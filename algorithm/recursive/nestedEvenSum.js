function nestedEvenSum(obj) {
  let sum = 0;

  const helper = (obj) => {
    for (const key in obj) {
      if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
        sum += obj[key];
      } else if (obj[key] !== null && typeof obj[key] === "object") {
        helper(obj[key]);
      }
    }
  };

  helper(obj);
  return sum;
}

var obj = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj));
