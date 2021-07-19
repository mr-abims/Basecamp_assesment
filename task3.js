// Evaluating if the number input is prime //
const aPrimeNumber = (num) => {
    if (!positiveInteger(num)) return "Input a positive number"
    for (let i = 2, r = Math.sqrt(num); i <= r; i++)
        if (num % i === 0) return false;
    return num >1;
};

// checking for the validity of the array//
const validArray = (arr) => {
    return Array.isArray(arr);
};

// Checking for the data type //
const primeArray = (arr) => {
    if (!validArray(arr)) return "This is a wrong data type";
    else if (arr.length === 0) return "This is an empty array";
    else {
        arr = arr.sort((a, b) => a - b);
        return arr.filter((i) => aPrimeNumber(i));

    }
};

var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

console.log(primeArray(numberArray));
