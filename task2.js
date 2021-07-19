// This is to check if an integer is positive
const positiveInteger = (num) => {
    return Math.sign(num) === 1;

};

// Evaluating if the number input is prime
const aPrimeNumber = (num) => {
    if (!positiveInteger(num)) return "Input a positive number"
    for (let i = 2, r = Math.sqrt(num); i <= r; i++)
        if (num % i === 0) return false;
    return num >1;
};

console.log(aPrimeNumber(5));