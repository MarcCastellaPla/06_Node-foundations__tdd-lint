import { describe, test, expect } from "vitest";
import getDistanceFromThreshold from "./getDistanceFromThreshold.js";

describe("Given getDistanceFromThreshold", () => {
    test("When the value isn't a number, Then an error is thrown", () => {
        // Arrange (Given)
        const invalidValue = "Hello, I am a string";
        const validThreshold = 10;

        // Act (When) & Assert (Then)
        expect(() => getDistanceFromThreshold(invalidValue, validThreshold)).toThrowError();
    });

    test("When the value isn't a number, and the threshold is valid Then an error is thrown with the specified message", () => {
        // Arrange (Given)
        const invalidValue = true;
        const validThreshold = 2;

        // Act (When) & Assert (Then)
        expect(() => getDistanceFromThreshold(invalidValue, validThreshold)).toThrowError("expected number but received boolean");
    });

    test("When the threshold isn't a number, Then an error is thrown with the specified message", () => {
        // Arrange (Given)
        const validValue = 10;
        const invalidThreshold = {};

        // Act (When) & Assert (Then)
        expect(() => getDistanceFromThreshold(validValue, invalidThreshold)).toThrowError("expected number but received object");
    });

    test("When the value and the threshold are positive, Then the function returns how much the value is left or exceeds the threshold", () => {
        // Arrange (Given)
        const validValue = 10;
        const validThreshold = 15;

        // Act (When)
        const result = getDistanceFromThreshold(validValue, validThreshold);

        // Assert (Then)
        expect(result).toBe(5);
    });

    test("When the value and the threshold are negative, Then the function returns how much the value is left or exceeds the threshold", () => {
        // Arrange (Given)
        const validValue = -10;
        const validThreshold = -15;

        // Act (When)
        const result = getDistanceFromThreshold(validValue, validThreshold);

        // Assert (Then)
        expect(result).toBe(5);
    });

    test("When the value is positive and the threshold is negative, Then the function returns how much the value is left or exceeds the threshold", () => {
        // Arrange (Given)
        const validValue = 10;
        const validThreshold = -15;

        // Act (When)
        const result = getDistanceFromThreshold(validValue, validThreshold);

        // Assert (Then)
        expect(result).toBe(25);
    });
});
