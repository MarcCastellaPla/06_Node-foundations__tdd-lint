/**
 * Check a pair of numbers and return true if their sum is 50 or greater than 50.
 * 
 * @param {number} summand1 - The first number to add.
 * @param {number} summand2 - The second number to add.
 * @returns {boolean} True if the sum is 50 or greater, otherwise false.
 * @throws {TypeError} Throws if either `summand1` or `summand2` is not a number.
 */
const isAdditionGreaterThanFifty = function (summand1, summand2) {
    if (typeof summand1 !== "number") {
        throw new TypeError(`expected number but received ${typeof summand1}`);
    }

    if (typeof summand2 !== "number") {
        throw new TypeError(`expected number but received ${typeof summand2}`);
    }

    return (summand1 + summand2) >= 50;
};

export default isAdditionGreaterThanFifty;
