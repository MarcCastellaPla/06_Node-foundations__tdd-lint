/**
 * Checks if the type of a value matches the specified type.
 * 
 * @param {any} value - The value to check.
 * @param {'string' | 'number' | 'boolean' | 'array'} type - The type to check against.
 * @returns {boolean} True if the type matches, false otherwise.
 * @throws {TypeError} Throws if the provided `type` is not one of 'string', 'number', 'boolean', or 'array'.
 */
const isTypeOf = function (value, type) {
    const validTypes = ['string', 'number', 'boolean', 'array'];

    if (typeof type !== 'string') {
        throw new TypeError(`Expected 'type' to be a string, but received a value of type '${typeof type}'`);
    }

    if (!validTypes.includes(type)) {
        throw new TypeError(`Expected one of '${validTypes.join("', '")}', but received '${type}'`);
    }

    if (type === 'array') {
        return Array.isArray(value);
    }

    return typeof value === type;
};

export default isTypeOf;
