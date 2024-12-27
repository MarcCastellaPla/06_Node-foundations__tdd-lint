import { describe, test, expect, vi } from "vitest";
import generateRandomNumberInRange from "./generateRandomNumberInRange.js";

describe("Given generateRandomNumberInRange", () => {
    test("When input is not a number, Then it throws a TypeError with the correct message", () => {
        // Arrange
        const invalidInput = "10";

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

        // Arrange (Given)
        const invalidInput = null;

        // Act & Assert
        expect(() => generateRandomNumberInRange(invalidInput)).toThrowError("expected number but received object");
    });

    test("When Math.random returns 0, Then the result is 0 regardless of the limit", () => {

        // Arrange (Given)
        const limit = 10;
        const mockRandomValue = 0; // Mocked random value
        const expectedResult = Math.round(mockRandomValue * limit);

        const spy = vi.spyOn(Math, "random").mockReturnValue(mockRandomValue);

        // Act (When)
        const result = generateRandomNumberInRange(limit);

        // Assert (Then)
        expect(result).toBe(expectedResult);

        spy.mockRestore();
    });

    test("When Math.random returns 1, Then the result equals the limit", () => {

        // Arrange (Given)
        const limit = 10;
        const mockRandomValue = 1; // Mocked random value
        const expectedResult = Math.round(mockRandomValue * limit);

        const spy = vi.spyOn(Math, "random").mockReturnValue(mockRandomValue);

        // Act (When)
        const result = generateRandomNumberInRange(limit);

        // Assert (Then)
        expect(result).toBe(expectedResult);

        spy.mockRestore();
    });

    test("When Math.random returns 0.5 and the limit is 10, Then the result is 5", () => {
        // Arrange
        const limit = 10;
        const mockRandomValue = 0.5; // Mocked random value
        const expectedResult = Math.round(mockRandomValue * limit);

        const spy = vi.spyOn(Math, "random").mockReturnValue(mockRandomValue);

        // Act
        const result = generateRandomNumberInRange(limit);

        // Assert
        expect(result).toBe(expectedResult);

        spy.mockRestore();
    });
});
