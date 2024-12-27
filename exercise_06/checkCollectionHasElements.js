/**
 * Checks if a collection (array) has elements.
 * 
 * @param {Array} collection - The array (collection) to check.
 * @returns {boolean} True if the array has elements, otherwise false. Returns false for empty arrays.
 * @throws {TypeError} Throws if the input is not an array.
 */
const checkCollectionHasElements = function (collection) {
    if (!Array.isArray(collection)) {
        throw new TypeError(`expected array but received ${typeof collection}`);
    }

    return collection.length > 0;
};

export default checkCollectionHasElements;
