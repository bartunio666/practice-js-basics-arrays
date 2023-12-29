const numbers = [1, 2, 3, 4, 5, 6, 7];

const oddNumbers = numbers.filter((el) => el % 2 === 0 && el > 0);

console.log(oddNumbers);

const oddNumbersSum = oddNumbers.reduce((a, b) => a + b, 0);

console.log(oddNumbersSum);
