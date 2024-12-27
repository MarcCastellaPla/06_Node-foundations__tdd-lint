// getDistanceMessageFromSumTo100.test.js

import { describe, test, expect, vi } from "vitest";
import getDistanceMessageFromSumTo100 from "./getDistanceMessageFromSumTo100.js";
import * as generateRandomNumberInRangeModule from "../exercise_03/generateRandomNumberInRange.js";
import * as getDistanceFromThresholdModule from '../exercise_01/getDistanceFromThreshold.js';

describe("Given getDistanceMessageFromSumTo100", () => {
    test("When the input is not a number (string), Then an error is thrown with the specified message", () => {
        // Arrange
        const invalidInput = "50";

        // Act & Assert
        expect(() => getDistanceMessageFromSumTo100(invalidInput)).toThrowError("expected number but received string");
    });

    test("When the input is not a number (boolean), Then an error is thrown", () => {
        // Arrange
        const invalidInput = true;

        // Act & Assert
        expect(() => getDistanceMessageFromSumTo100(invalidInput)).toThrowError("expected number but received boolean");
    });

    test("When the input is not a number (null), Then an error is thrown", () => {
        // Arrange
        const invalidInput = null;

        // Act & Assert
        expect(() => getDistanceMessageFromSumTo100(invalidInput)).toThrowError(
            "expected number but received object"
        );
    });

    test("When the sum exceeds 100, Then returns the correct exceedance message", () => {
        // Arrange
        const inputValue = 60;
        const mockedRandomNumber = 50; // 60 + 50 = 110
        const mockedSumNumber = inputValue + mockedRandomNumber;
        const mockedAbsoluteDistance = -10; // sumNumber - 100 = -10

        // Spy on generateRandomNumberInRange and mock its return value
        const randomNumberSpy = vi.spyOn(generateRandomNumberInRangeModule, 'default').mockReturnValue(mockedRandomNumber);

        // Spy on getDistanceFromThreshold and mock its return value
        const distanceSpy = vi.spyOn(getDistanceFromThresholdModule, 'default').mockImplementation((sum, threshold) => sum - threshold);

        // Act
        const result = getDistanceMessageFromSumTo100(inputValue);

        // Assert
        expect(result).toBe(`Sum with value ${mockedSumNumber} exceeds in ${Math.abs(mockedAbsoluteDistance)} from number 100`);

        // Restore the spies
        randomNumberSpy.mockRestore();
        distanceSpy.mockRestore();
    });

    test("When the sum is exactly 100, Then returns the correct message", () => {
        // Arrange
        const inputValue = 50;
        const mockedRandomNumber = 50; // 50 + 50 = 100
        const mockedSumNumber = inputValue + mockedRandomNumber;
        const mockedAbsoluteDistance = 0; // sumNumber - 100 = 0

        // Spy on generateRandomNumberInRange and mock its return value
        const randomNumberSpy = vi.spyOn(generateRandomNumberInRangeModule, 'default').mockReturnValue(mockedRandomNumber);

        // Spy on getDistanceFromThreshold and mock its return value
        const distanceSpy = vi.spyOn(getDistanceFromThresholdModule, 'default').mockReturnValue(mockedAbsoluteDistance);

        // Act
        const result = getDistanceMessageFromSumTo100(inputValue);

        // Assert
        expect(result).toBe(`Sum with value ${mockedSumNumber} is left in ${mockedAbsoluteDistance} from number 100`);

        // Restore the spies
        randomNumberSpy.mockRestore();
        distanceSpy.mockRestore();
    });

    test("When the sum is less than 100, Then returns the correct remaining message", () => {
        // Arrange
        const inputValue = 30;
        const mockedRandomNumber = 40; // 30 + 40 = 70
        const mockedSumNumber = inputValue + mockedRandomNumber;
        const mockedAbsoluteDistance = 30; // 100 - sumNumber = 30

        // Spy on generateRandomNumberInRange and mock its return value
        const randomNumberSpy = vi.spyOn(generateRandomNumberInRangeModule, 'default').mockReturnValue(mockedRandomNumber);

        // Spy on getDistanceFromThreshold and mock its return value
        const distanceSpy = vi.spyOn(getDistanceFromThresholdModule, 'default').mockReturnValue(mockedAbsoluteDistance);

        // Act
        const result = getDistanceMessageFromSumTo100(inputValue);

        // Assert
        expect(result).toBe(`Sum with value ${mockedSumNumber} is left in ${mockedAbsoluteDistance} from number 100`);

        // Restore the spies
        randomNumberSpy.mockRestore();
        distanceSpy.mockRestore();
    });

    // Additional Functional Test Without Using `vi.spyOn`
    test("When the value is 0 and random number is 30, Then returns the correct remaining message", () => {
        // Arrange
        const inputValue = 0;
        const actualRandomNumber = 30; 
        const actualSumNumber = inputValue + actualRandomNumber;
        const actualAbsoluteDistance = 70; 

        const originalGenerateRandomNumberInRange = generateRandomNumberInRangeModule.default;
        generateRandomNumberInRangeModule.default = () => actualRandomNumber;

        // Mock the getDistanceFromThreshold function
        const originalGetDistanceFromThreshold = getDistanceFromThresholdModule.default;
        getDistanceFromThresholdModule.default = (sum, threshold) => threshold - sum;

        // Act
        const result = getDistanceMessageFromSumTo100(inputValue);

        // Assert
        expect(result).toBe(`Sum with value ${actualSumNumber} is left in ${actualAbsoluteDistance} from number 100`);

        // Restore the original functions
        generateRandomNumberInRangeModule.default = originalGenerateRandomNumberInRange;
        getDistanceFromThresholdModule.default = originalGetDistanceFromThreshold;
    });
});
