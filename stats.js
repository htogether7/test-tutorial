exports.max = (numbers) => {
  return Math.max(...numbers);
};

exports.min = (numbers) => {
  return Math.min(...numbers);
};

exports.avg = (numbers) => {
  const sum = numbers.reduce((a, b) => a + b);

  return sum / numbers.length;
};

exports.sort = (numbers) => {
  numbers.sort((a, b) => a - b);
  return numbers;
};

exports.median = (numbers) => {
  const middle = parseInt(numbers.length / 2);
  return numbers.length % 2
    ? numbers[middle]
    : (numbers[middle] + numbers[middle - 1]) / 2;
};

exports.mode = (numbers) => {
  const count = new Map();
  for (const number of numbers) {
    const c = count.get(number) || 0;
    count.set(number, c + 1);
  }
  const maxCount = Math.max(...count.values());
  const modes = [...count.keys()].filter((n) => count.get(n) === maxCount);
  if (modes.length === [...count.keys()].length) {
    return null;
  } else {
    // return modes;
    return modes.length === 1 ? modes[0] : modes;
  }
};
