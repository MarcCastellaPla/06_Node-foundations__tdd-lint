/**
 * Get the total number of words contained in a given string.
 * @param {string} sentence - The input string from which words will be counted.
 * @returns {number} The total number of words in the string.
 * @throws {TypeError} Throws if the input is not a string.
 */
const getTotalWordsFromString = function (sentence) {
    if (typeof sentence !== "string") {
        throw new TypeError(`expected string but received ${typeof sentence}`);
    }

    if (sentence === "") {
        return 0;
    }

    const words = sentence.trim().split(/\s+/);

    return words.length;
}

export default getTotalWordsFromString;
