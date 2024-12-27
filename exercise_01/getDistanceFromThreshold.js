/**
 * Calculates the distance between a value and a threshold.
 * - Returns a positive number if the value is below the threshold.
 * - Returns a negative number if the value exceeds the threshold.
 * 
 * @param {number} value - The number to compare against the threshold.
 * @param {number} threshold - The threshold to compare the value to.
 * @returns {number} - The distance from the value to the threshold.
 */
function getDistanceFromThreshold(value, threshold) {
    if (typeof value !== "number") {
      throw new TypeError("expected number but received " + typeof value);
    }
    if (typeof threshold !== "number") {
      throw new TypeError("expected number but received " + typeof threshold);
    }
  
    // Returns (threshold - value):
    //  - Positive if value < threshold
    //  - Negative if value > threshold
    //  - Zero if value === threshold
    return threshold - value;
}
  
  export default getDistanceFromThreshold  ;
