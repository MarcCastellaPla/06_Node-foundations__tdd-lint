/**
 * Checks if the type of a value matches the specified type.
 * @param {any} value - The value to check.
 * @param {'string' | 'number' | 'boolean' | 'array'} type - The type to check against.
 * @returns {boolean} True if the type matches, false otherwise.
 */
const isTypeOf = function (value, type) {
    const validTypes = ["string", "number", "boolean", "array"];

    if (!validTypes.includes(type)) {
        throw new TypeError(`expected one of 'string', 'number', 'boolean', 'array' but received ${typeof type}`);
    }

    return typeof value === type;
}

export default isTypeOf;