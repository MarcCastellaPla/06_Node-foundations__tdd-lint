import { describe, test, expect } from "vitest";
import isGreaterThan from "./isGreaterThan.js";

describe("Given isGreaterThan", () => {

    test("When the first input isn't a number, Then an error is thrown", () => {
        // Arrange (Given)
        const invalidValue = "not a number";
        const threshold = 10;

        // Act (When) & Assert (Then)
        expect(() => isGreaterThan(invalidValue, threshold)).toThrowError("expected number but received string");
    });

    test("When the second input isn't a number, Then an error is thrown", () => {
        // Arrange (Given)
        const value = 20;
        const invalidThreshold = null; // typeof null is 'object'

        // Act (When) & Assert (Then)
        expect(() => isGreaterThan(value, invalidThreshold)).toThrowError("expected number but received object");
    });

    test("When both inputs aren't numbers, Then an error is thrown for the first invalid input", () => {
        // Arrange (Given)
        const invalidValue = undefined;
        const invalidThreshold = "threshold";

        // Act (When) & Assert (Then)
        expect(() => isGreaterThan(invalidValue, invalidThreshold)).toThrowError("expected number but received undefined");
    });

    test("When value is greater than threshold, Then returns true", () => {
        // Arrange (Given)
        const value = 15;
        const threshold = 10;

        // Act (When)
        const result = isGreaterThan(value, threshold);

        // Assert (Then)
        expect(result).toBe(true);
    });

    test("When value is equal to threshold, Then returns false", () => {
        // Arrange (Given)
        const value = 10;
        const threshold = 10;

        // Act (When)
        const result = isGreaterThan(value, threshold);

        // Assert (Then)
        expect(result).toBe(false);
    });

    test("When value is less than threshold, Then returns false", () => {
        // Arrange (Given)
        const value = 5;
        const threshold = 10;

        // Act (When)
        const result = isGreaterThan(value, threshold);

        // Assert (Then)
        expect(result).toBe(false);
    });
});
