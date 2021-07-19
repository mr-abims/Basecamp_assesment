// Checking for number of threes in an array//
const threeNumbers = (num) => {
    let arr = [];
    if (num < 3) return "input a higher value";
    for (let i = 0; i < num; i++) {
        if (("" + i).indexOf(3) > -1) arr.push(i);
    }
    return {count: arr.length, numbers: arr};
};

console.log(threeNumbers(35))