/**
 * Check whether one number is greater than a given number.
 * @param {number} value - The value to compare.
 * @param {number} threshold - The threshold to compare against.
 * @returns {boolean} True if value is greater than threshold, otherwise false.
 * @throws {TypeError} If either input is not a number.
 */
const isGreaterThan = function (value, threshold) {
    if (typeof value !== "number") {
        throw new TypeError("expected number but received " + typeof value);
    }

    if (typeof threshold !== "number") {
        throw new TypeError("expected number but received " + typeof threshold);
    }

    return value > threshold;
}

export default isGreaterThan;
