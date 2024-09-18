// function fib(n) {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

// Top Down

function fib(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];

  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;

  return res;
}

// Bottom Up

function fib(n) {
  if (n <= 2) return 1;

  const fibNums = [undefined, 1, 1];

  for (let i = 3; i < n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }

  return fibNums[n];
}
