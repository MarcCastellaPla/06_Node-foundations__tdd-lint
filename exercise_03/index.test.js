import { describe, test, expect, vi } from "vitest";
import generateRandomNumberInRange from "./generateRandomNumberInRange.js";

describe("Given generateRandomNumberInRange", () => {
    test("When input is not a number, Then it throws a TypeError with the correct message", () => {
        // Arrange
        const invalidInput = "24";

        // Act & Assert
        expect(() => generateRandomNumberInRange(invalidInput)).toThrowError("expected number but received string");
    });

    test("When input is undefined, Then it throws a TypeError with the correct message", () => {
        // Arrange
        const invalidInput = undefined;

        // Act & Assert
        expect(() => generateRandomNumberInRange(invalidInput)).toThrowError("expected number but received undefined");
    });

    test("When input is null, Then it throws a TypeError with the correct message", () => {
        // Arrange
        const invalidInput = null;

        // Act & Assert
        expect(() => generateRandomNumberInRange(invalidInput)).toThrowError("expected number but received object");
    });

    test("When Math.random returns 0, Then the result is 0 regardless of the limit", () => {
        // Arrange
        const limit = 1899;
        const mockedRandomValue = 0; // Mocked random value
        const expectedResult = Math.round(mockedRandomValue * limit);

        const spy = vi.spyOn(Math, "random").mockReturnValue(mockedRandomValue);

        // Act
        const result = generateRandomNumberInRange(limit);

        // Assert
        expect(result).toBe(expectedResult);

        // Cleanup
        spy.mockRestore();
    });

    test("When Math.random returns 1, Then the result equals the limit", () => {
        // Arrange
        const limit = 10;
        const mockedRandomValue = 1; // Mocked random value
        const expectedResult = Math.round(mockedRandomValue * limit);

        const spy = vi.spyOn(Math, "random").mockReturnValue(mockedRandomValue);

        // Act
        const result = generateRandomNumberInRange(limit);

        // Assert
        expect(result).toBe(expectedResult);

        // Cleanup
        spy.mockRestore();
    });

    test("When Math.random returns 0.5 and the limit is 10, Then the result is 5", () => {
        // Arrange
        const limit = 10;
        const mockedRandomValue = 0.5; // Mocked random value
        const expectedResult = Math.round(mockedRandomValue * limit);

        const spy = vi.spyOn(Math, "random").mockReturnValue(mockedRandomValue);

        // Act
        const result = generateRandomNumberInRange(limit);

        // Assert
        expect(result).toBe(expectedResult);

        // Cleanup
        spy.mockRestore();
    });
});
