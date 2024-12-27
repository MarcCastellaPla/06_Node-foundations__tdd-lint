/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 * validate input: throw TypeError with message "expected number but received <type-of-argument>" if input is not a number
 */

/**
 * Generate a rounded random number depending on a limit.
 * @param {number} limit - The upper limit for the generated random number.
 * @returns {number} A rounded random number within the specified limit.
 */
const generateRandomNumberInRange = function (limit) {
    if (typeof limit !== "number") {
        throw new TypeError("expected number but received " + typeof limit);
    }

    const result = Math.round(Math.random() * limit);

    return result;
}

export default generateRandomNumberInRange;