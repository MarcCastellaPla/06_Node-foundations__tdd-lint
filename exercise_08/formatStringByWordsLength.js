import getTotalWordsFromString from '../exercise_02/getTotalWordsFromString.js';

/**
 * Converts the case of a given string based on the number of words in it.
 * If the total number of words is greater than 5, returns the string in uppercase.
 * Otherwise, returns the string in lowercase.
 * @param {string} sentence - The string whose number of words will be checked.
 * @returns {string} The formatted string in either uppercase or lowercase.
 * @throws {TypeError} Throws if the input is not a string.
 */
const formatStringByWordsLength = function (sentence) {
    if (typeof sentence !== "string") {
        throw new TypeError("expected string but received " + typeof sentence);
    }

    const totalWords = getTotalWordsFromString(sentence);
    const threshold = 5;

    if (totalWords > threshold) {
        return sentence.toUpperCase();
    } else {
        return sentence.toLowerCase();
    }
};

export default formatStringByWordsLength;
