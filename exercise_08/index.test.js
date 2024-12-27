import { describe, test, expect } from "vitest";
import formatStringByWordsLength from "./formatStringByWordsLength.js";

describe("Given formatStringByWordsLength", () => {
    test("When the input is not a string (number), Then an error is thrown with the specified message", () => {
        // Arrange
        const invalidInput = 42;

        // Act & Assert
        expect(() => formatStringByWordsLength(invalidInput)).toThrowError("expected string but received number");
    });

    test("When the input is not a string (boolean), Then an error is thrown with the specified message", () => {
        // Arrange
        const invalidInput = false;

        // Act & Assert
        expect(() => formatStringByWordsLength(invalidInput)).toThrowError("expected string but received boolean");
    });

    test("When the input is not a string (null), Then an error is thrown with the specified message", () => {
        // Arrange
        const invalidInput = null;

        // Act & Assert
        expect(() => formatStringByWordsLength(invalidInput)).toThrowError("expected string but received object");
    });

    test("When the sentence has more than 5 words, Then returns the string in uppercase", () => {
        // Arrange
        const input = "This test case has more than five words";

        // Act
        const result = formatStringByWordsLength(input);

        // Assert
        expect(result).toBe(input.toUpperCase());
    });

    test("When the sentence has exactly 5 words, Then returns the string in lowercase", () => {
        // Arrange
        const input = "These are five exact words";

        // Act
        const result = formatStringByWordsLength(input);

        // Assert
        expect(result).toBe(input.toLowerCase());
    });

    test("When the sentence has fewer than 5 words, Then returns the string in lowercase", () => {
        // Arrange
        const input = "I am groot";

        // Act
        const result = formatStringByWordsLength(input);

        // Assert
        expect(result).toBe(input.toLowerCase());
    });
});
