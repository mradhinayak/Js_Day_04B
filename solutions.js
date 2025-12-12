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

// Solution 3rd
function removeDecimal(num) {
   while(!Number.isInteger(num)){
    num = num * 10
   }
   return num
}

console.log(removeDecimal(12.34));

// Solution 3rd; Method 2nd
function removeDecimal(num) {
   while(num !==Math.floor(num)){
    num = num * 10
   }
   return num
}

console.log(removeDecimal(85.45));

// Solution 4th
function seprateParts(num) {
    const fractionPart = Number((num % 1).toFixed(10))
    const wholePart = Number((num - fractionPart).toFixed(10))
    return {wholePart, fractionPart}
}
console.log(seprateParts(95.75))

// Solution 5th
function generateNumberFromWholeAndFractionalDigit(wholeDigits, fractionalDigits) {
    let wholePart = 0;
    let fractionPart = 0;

    // wholeDigits.reverse()

    for(let i = 0; i < wholeDigits.length; i++) {
        wholePart += wholeDigits[i] * 10 ** (wholeDigits.length - i - 1)
    }

    for(let i = 0; i < fractionalDigits.length; i++) {
        fractionPart += fractionalDigits[i] * 10 ** -(i + 1)
    }

    return wholePart + Number(fractionPart.toFixed(10))
}
console.log(generateNumberFromWholeAndFractionalDigit([1, 2], [3, 4]))

// Solution 6th
function isPalindrome(num) {
    const originalNumber = num;
    const digits = []
    while(num > 0) {
        digits.unshift(num % 10)
        num = Math.floor(num / 10)
    }
    let reversedNumber = 0
    for(let i = 0; i < digits.length; i++) {
        reversedNumber += digits[i] * 10 ** i
    }
    return reversedNumber === originalNumber
}

// Solution 7th
function isArmstrong(num) {
    const originalNum = num
    const digits = []
    while(num > 0) {
        digits.unshift(num % 10)
        num = Math.floor(num / 10)
    }

    let digitsPowerSum = 0

    for(let i = 0; i < digits.length; i++) {
        digitsPowerSum += digits[i] ** digits.length
    }

    return digitsPowerSum === originalNum
}

console.log(reverseDigit(1234));