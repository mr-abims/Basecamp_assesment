// This is to know if an input is a palindrome//
const validString = (str) => {
    return typeof str === "string";

};

const palindrome = (str) => {
    if (!validString) return "This is not a valid input"
    else if (str.length === 0) return "This is an empty string"
    else return str.split("").reverse().join("") === str;
};

console.log(palindrome("abba"));
