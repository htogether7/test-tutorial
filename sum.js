function sum(a, b) {
  return a + b;
}

function sumOf(numbers) {
  return numbers.reduce((a, b) => a + b);
}

exports.sum = sum;
exports.sumOf = sumOf;
