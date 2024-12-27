import { describe, test, expect, vi, afterEach } from "vitest";
import getDistanceMessageFromSumTo100 from "./getDistanceMessageFromSumTo100.js";
import generateRandomNumberInRange from "../exercise_03/generateRandomNumberInRange.js";
import getDistanceFromThreshold from "../exercise_01/getDistanceFromThreshold.js";

vi.mock("../exercise_03/generateRandomNumberInRange");
vi.mock("../exercise_01/getDistanceFromThreshold");

afterEach(() => {
    vi.restoreAllMocks(); // Reset all mocks after each test
});

describe("Given getDistanceMessageFromSumTo100", () => {
    test("When the input is not a number (string), Then an error is thrown with the specified message", () => {
        // Arrange
        const invalidInput = "50";

        // Act & Assert
        expect(() => getDistanceMessageFromSumTo100(invalidInput)).toThrowError("expected number but received string");
    });

    test("When the input is not a number (boolean), Then an error is thrown with the specified message", () => {
        // Arrange
        const invalidInput = true;

        // Act & Assert
        expect(() => getDistanceMessageFromSumTo100(invalidInput)).toThrowError("expected number but received boolean");
    });

    test("When the input is not a number (null), Then an error is thrown with the specified message", () => {
        // Arrange
        const invalidInput = null;

        // Act & Assert
        expect(() => getDistanceMessageFromSumTo100(invalidInput)).toThrowError("expected number but received object");
    });

    test("When the sum exceeds 100, Then returns the correct exceedance message", () => {
        // Arrange
        const inputValue = 60;
        const mockRandomValue = 50;
        const mockSumValue = inputValue + mockRandomValue;
        const mockAbsoluteDistance = 10;

        generateRandomNumberInRange.mockReturnValue(mockRandomValue);
        getDistanceFromThreshold.mockImplementation((sum, threshold) => threshold - sum);

        // Act
        const result = getDistanceMessageFromSumTo100(inputValue);

        // Assert
        expect(result).toBe(`Sum with value ${mockSumValue} exceeds in ${mockAbsoluteDistance} from number 100`);
    });

    test("When the sum is less than 100, Then returns the correct remaining message", () => {
        // Arrange
        const inputValue = 30;
        const mockRandomValue = 40;
        const mockSumValue = inputValue + mockRandomValue;
        const mockAbsoluteDistance = 30;

        generateRandomNumberInRange.mockReturnValue(mockRandomValue);
        getDistanceFromThreshold.mockReturnValue(mockAbsoluteDistance);

        // Act
        const result = getDistanceMessageFromSumTo100(inputValue);

        // Assert
        expect(result).toBe(`Sum with value ${mockSumValue} is left in ${mockAbsoluteDistance} from number 100`);
    });

    test("When the value is 0 and random number is 30, Then returns the correct remaining message", () => {
        // Arrange
        const inputValue = 0;
        const mockRandomValue = 30;
        const mockSumValue = inputValue + mockRandomValue;
        const mockAbsoluteDistance = 70;

        generateRandomNumberInRange.mockReturnValue(mockRandomValue);
        getDistanceFromThreshold.mockImplementation((sum, threshold) => threshold - sum);

        // Act
        const result = getDistanceMessageFromSumTo100(inputValue);

        // Assert
        expect(result).toBe(`Sum with value ${mockSumValue} is left in ${mockAbsoluteDistance} from number 100`);
    });
});
