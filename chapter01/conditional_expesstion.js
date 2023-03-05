/**
 * nested conditional expression
 * case
 * if x > 10 then return x
 * if x == 0 then return 0
 * if x < 0 then return -x
 * @param x
 * @returns {*|number|number}
 */
function abs(x) {
    return x > 0 ? x : x === 0 ? 0 : -x;
}

/**
 * create conditional expression
 *
 */
function createConditionalExpression(predicate, consequent, alternative) {
    if (predicate) return consequent
    else return alternative
}

function abs_(x) {
    return createConditionalExpression(
        x > 0,
        x,
        createConditionalExpression(
            x === 0,
            0,
            -x
        )
    )
}

console.log(abs_(-5))