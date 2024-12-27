/**
 * Checks if a collection (array) has elements.
 * @param {Array} collection - The array (collection) to check.
 * @returns {boolean} Returns true if the collection has elements, otherwise false.
 */
const checkCollectionHasElements = function (collection) {
    if (!Array.isArray(collection)) {
        throw new TypeError("expected array but received " + typeof collection);
    }

    return collection.length > 0;
}

export default checkCollectionHasElements;