/**
 * Calculates the distance between a value and a threshold.
 * - Returns a positive number if the value is below the threshold.
 * - Returns a negative number if the value exceeds the threshold.
 * - Returns zero if the value is equal to the threshold.
 * 
 * @param {number} value - The number to compare against the threshold.
 * @param {number} threshold - The threshold to compare the value to.
 * @returns {number} - The distance from the value to the threshold.
 * @throws {TypeError} Throws if either `value` or `threshold` is not a number.
 */
function getDistanceFromThreshold(value, threshold) {
    if (typeof value !== "number") {
      throw new TypeError("expected number but received " + typeof value);
    }
    if (typeof threshold !== "number") {
      throw new TypeError("expected number but received " + typeof threshold);
    }
  
    return threshold - value;
}
  
  export default getDistanceFromThreshold  ;
