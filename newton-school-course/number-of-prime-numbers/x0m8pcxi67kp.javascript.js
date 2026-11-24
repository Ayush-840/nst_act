// start, end : variables are already defined, you have to directly use them

// start, end : variables are already defined, you have to directly use them

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let primeCount = 0;
const low = Math.min(start, end);
const high = Math.max(start, end);

for (let current = low; current <= high; current++) {
  if (isPrime(current)) {
    primeCount++;
  }
}

console.log(primeCount);