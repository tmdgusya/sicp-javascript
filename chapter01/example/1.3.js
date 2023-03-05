function findMin() {
    let min = arguments[0]
    for (let i = 1; i < arguments.length; i++) {
        min = min < arguments[i] ? min : arguments[0]
    }
    return min
}


/**
 * Caution
 * (* You must input each number that is not the same *)
 * @param num1
 * @param num2
 * @param num3
 * @returns {number}
 */
function multiplyExcludeMinNumber(num1, num2, num3) {
    let min = findMin(num1, num2, num3)
    switch (min) {
        case num1: return num2 * num3
        case num2: return num1 * num3
        case num3: return num1 * num2
    }
}

console.log(multiplyExcludeMinNumber(1,2,3))
console.log(multiplyExcludeMinNumber(1,5,3))
console.log(multiplyExcludeMinNumber(6,3,9))
console.log(multiplyExcludeMinNumber(0,3,9))