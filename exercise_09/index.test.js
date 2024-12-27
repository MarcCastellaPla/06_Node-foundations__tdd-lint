import { describe, test, expect, vi, afterEach } from "vitest";
import getDistanceMessageFromSumTo100 from "./getDistanceMessageFromSumTo100.js";
import generateRandomNumberInRange from "../exercise_03/generateRandomNumberInRange.js";
import getDistanceFromThreshold from "../exercise_01/getDistanceFromThreshold.js";

vi.mock("../exercise_03/generateRandomNumberInRange");
vi.mock("../exercise_01/getDistanceFromThreshold");

afterEach(() => {
    vi.restoreAllMocks(); // Ensure all mocks are reset after each test
});

describe("Given getDistanceMessageFromSumTo100", () => {
    test("When the input is not a number (string), Then an error is thrown with the specified message", () => {
        // Arrange (Given)
        const invalidInput = "50";

        // Act (When) & Assert (Then)
        expect(() => getDistanceMessageFromSumTo100(invalidInput)).toThrowError("expected number but received string");
    });

    test("When the input is not a number (boolean), Then an error is thrown with the specified message", () => {
        // Arrange (Given)
        const invalidInput = true;

        // Act (When) & Assert (Then)
        expect(() => getDistanceMessageFromSumTo100(invalidInput)).toThrowError("expected number but received boolean");
    });

    test("When the input is not a number (null), Then an error is thrown with the specified message", () => {
        // Arrange (Given)
        const invalidInput = null;

        // Act (When) & Assert (Then)
        expect(() => getDistanceMessageFromSumTo100(invalidInput)).toThrowError("expected number but received object");
    });

    test("When the sum exceeds 100, Then returns the correct exceedance message", () => {
        // Arrange (Given)
        const inputValue = 60;
        const mockedRandomNumber = 50;
        const mockedSumNumber = inputValue + mockedRandomNumber;
        const mockedAbsoluteDistance = 10;

        generateRandomNumberInRange.mockReturnValue(mockedRandomNumber);
        getDistanceFromThreshold.mockImplementation((sum, threshold) => threshold - sum);

        // Act (When)
        const result = getDistanceMessageFromSumTo100(inputValue);

        // Assert (Then)
        expect(result).toBe(`Sum with value ${mockedSumNumber} exceeds in ${mockedAbsoluteDistance} from number 100`);
    });

    test("When the sum is less than 100, Then returns the correct remaining message", () => {
        // Arrange (Given)
        const inputValue = 30;
        const mockedRandomNumber = 40;
        const mockedSumNumber = inputValue + mockedRandomNumber;
        const mockedAbsoluteDistance = 30;

        generateRandomNumberInRange.mockReturnValue(mockedRandomNumber);
        getDistanceFromThreshold.mockReturnValue(mockedAbsoluteDistance);

        // Act (When)
        const result = getDistanceMessageFromSumTo100(inputValue);

        // Assert (Then)
        expect(result).toBe(`Sum with value ${mockedSumNumber} is left in ${mockedAbsoluteDistance} from number 100`);
    });

    test("When the value is 0 and random number is 30, Then returns the correct remaining message", () => {
        // Arrange (Given)
        const inputValue = 0;
        const actualRandomNumber = 30;
        const actualSumNumber = inputValue + actualRandomNumber;
        const actualAbsoluteDistance = 70;

        generateRandomNumberInRange.mockReturnValue(actualRandomNumber);
        getDistanceFromThreshold.mockImplementation((sum, threshold) => threshold - sum);

        // Act (When)
        const result = getDistanceMessageFromSumTo100(inputValue);

        // Assert (Then)
        expect(result).toBe(`Sum with value ${actualSumNumber} is left in ${actualAbsoluteDistance} from number 100`);
    });
});
