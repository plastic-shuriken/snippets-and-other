const fibonacci = (number, memo) => {
  if (typeof number !== "number") {
    return 0;
  }

  if (number in memo) {
    return memo[number];
  }

  if (number <= 1) {
    memo[number] = number;
  } else {
    memo[number] = fibonacci(number - 1, memo) + fibonacci(number - 2, memo);
  }

  return memo[number];
};

module.exports = { fibonacci };
