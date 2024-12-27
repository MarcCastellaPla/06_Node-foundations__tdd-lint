import getDistanceFromThreshold from '../exercise_01/getDistanceFromThreshold.js';
import generateRandomNumberInRange from "../exercise_03/generateRandomNumberInRange.js";

/**
 * Generates a message based on the sum of a given number and a random number between 0 and 100.
 * If the sum exceeds 100, it returns a message indicating by how much it exceeds.
 * Otherwise, it returns a message indicating how much is left to reach 100.
 * @param {number} value - The number to be summed with a randomly generated number.
 * @returns {string} The message indicating the distance from the threshold of 100.
 */
const getDistanceMessageFromSumTo100 = function (value) {
    if (typeof value !== "number") {
        throw new TypeError(`expected number but received ${typeof value}`);
    }

    const threshold = 100;
    const randomNumber = generateRandomNumberInRange(threshold);
    const sumNumber = value + randomNumber;
    const distanceFromThreshold = getDistanceFromThreshold(sumNumber, threshold);

    if (distanceFromThreshold < 0) {
        return `Sum with value ${sumNumber} exceeds in ${Math.abs(distanceFromThreshold)} from number 100`;
    }

    return `Sum with value ${sumNumber} is left in ${distanceFromThreshold} from number 100`;
};

export default getDistanceMessageFromSumTo100;
