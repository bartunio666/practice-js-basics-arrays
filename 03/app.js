const n = 444;
const oddNumbers = [];

for (let i = 0; i <= n; i++) {
  if (i % 2 === 0 && i > 0) oddNumbers.push(i);
}

console.log(`all odd numbers from 0 to ${n} : ${oddNumbers}`);
