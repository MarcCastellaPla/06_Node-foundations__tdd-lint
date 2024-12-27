/**
 * Generate a rounded random number depending on a limit.
 * @param {number} limit - The upper limit for the generated random number.
 * @returns {number} A rounded random number within the specified limit.
 * @throws {TypeError} If the limit is not a number.
 */
const generateRandomNumberInRange = function (limit) {
    if (typeof limit !== "number") {
        throw new TypeError("expected number but received " + typeof limit);
    }

    const result = Math.round(Math.random() * limit);

    return result;
}

export default generateRandomNumberInRange;