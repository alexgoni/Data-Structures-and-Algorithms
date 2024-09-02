function factorial(num) {
  if (num < 0) throw new Error("0 이상의 인수를 넣어주세요.");
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(0));
