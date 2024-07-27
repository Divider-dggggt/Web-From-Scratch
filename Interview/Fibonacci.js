// Time complexity O(2^n)
function Fibonacci_recursive = (n) => {
  if (n <= 1) {
    return n;
  }
  return Fibonacci_recursive(n - 1) + Fibonacci_recursive(n - 2);
}

// Time complexity O(n)
function Fibonacci_iterative = (n) => {
  let a = 0;
  let b = 1;
  let c = 0;
  if (n == 0) {
    return a;
  } else if (n == 1) {
    return b;
  } else {
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
      }
      return c;
    }
  }
  