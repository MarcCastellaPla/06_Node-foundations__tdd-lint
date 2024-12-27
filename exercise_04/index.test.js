import { describe, test, expect } from "vitest";
import isGreaterThan from "./isGreaterThan.js";

describe("Given isGreaterThan", () => {
    test("When the first input is not a number, Then it throws an error with the correct message", () => {
        // Arrange
        const invalidValue = "not a number";
        const threshold = 10;

        // Act & Assert
        expect(() => isGreaterThan(invalidValue, threshold)).toThrowError("expected number but received string");
    });

    test("When the second input is not a number, Then it throws an error with the correct message", () => {
        // Arrange
        const value = 20;
        const invalidThreshold = null; // typeof null is 'object'

        // Act & Assert
        expect(() => isGreaterThan(value, invalidThreshold)).toThrowError("expected number but received object");
    });

    test("When both inputs are not numbers, Then it throws an error for the first invalid input", () => {
        // Arrange
        const invalidValue = undefined;
        const invalidThreshold = "threshold";

        // Act & Assert
        expect(() => isGreaterThan(invalidValue, invalidThreshold)).toThrowError("expected number but received undefined");
    });

    test("When value is greater than threshold, Then it returns true", () => {
        // Arrange
        const value = 15;
        const threshold = 10;

        // Act
        const result = isGreaterThan(value, threshold);

        // Assert
        expect(result).toBe(true);
    });

    test("When value is equal to threshold, Then it returns false", () => {
        // Arrange
        const value = 10;
        const threshold = 10;

        // Act
        const result = isGreaterThan(value, threshold);

        // Assert
        expect(result).toBe(false);
    });

    test("When value is less than threshold, Then it returns false", () => {
        // Arrange
        const value = 5;
        const threshold = 10;

        // Act
        const result = isGreaterThan(value, threshold);

        // Assert
        expect(result).toBe(false);
    });
});
