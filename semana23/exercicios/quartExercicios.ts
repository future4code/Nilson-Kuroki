const printNumbers = (n: number) => {
    if (n >= 0) {
        printNumbers(n - 1);
        console.log(n);
    }
};

const printNumbersReverse = (n: number) => {
    if (n >= 0) {
        console.log(n);
        printNumbersReverse(n - 1);
    }
  };

console.log(printNumbers(5))
console.log(printNumbersReverse(5))