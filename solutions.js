// Solution 1st
function splitIntoDigit(num) {
    const digits = []
    while(num > 0) {
        digits.unshift(num % 10)
        num = Math.floor(num / 10)
    }
    return digits
}

console.log(splitIntoDigit(1234));

// Solution 2nd
function reverseDigit(num) {
    const digits = []
    while(num > 0) {
        digits.unshift(num % 10)
        num = Math.floor(num / 10)
    }
    let reversedNumber = 0
    for(let i = 0; i < digits.length; i++) {
        reversedNumber += digits[i] * 10 ** i
    }
    return reversedNumber
}

console.log(reverseDigit(1234));