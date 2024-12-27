import checkCollectionHasElements from "../exercise_06/checkCollectionHasElements.js";

/**
 * Transforms an array into a string.
 * - If the array has elements, it returns the elements joined by '|' (pipe character).
 * - Otherwise, it returns an empty string.
 * @param {Array} collection - The array (collection) to be transformed into a string.
 * @returns {string} The resulting string or an empty string if the array is empty.
 * @throws {TypeError} If the input is not an array.
 */
const transformCollectionToString = function (collection) {
    if (!Array.isArray(collection)) {
        throw new TypeError("expected array but received " + typeof collection);
    }

    return checkCollectionHasElements(collection) 
        ? collection.map(item => String(item)).join("|") 
        : "";
}

export default transformCollectionToString;
