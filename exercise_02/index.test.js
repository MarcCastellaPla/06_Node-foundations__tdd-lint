import { describe, test, expect } from "vitest";
import getTotalWordsFromString from "./getTotalWordsFromString.js";

describe("Given getTotalWordsFromString", () => {
    test("When the input is not a string, Then an error is thrown", () => {
        // Arrange
        const invalidInput = 42;

        // Act & Assert
        expect(() => getTotalWordsFromString(invalidInput)).toThrowError();
    });

    test("When the input is not a string, Then an error is thrown with the correct message", () => {
        // Arrange
        const invalidInput = true;

        // Act & Assert
        expect(() => getTotalWordsFromString(invalidInput)).toThrowError(
            "expected string but received boolean"
        );
    });

    test("When the input is undefined, Then an error is thrown with the correct message", () => {
        // Arrange
        const invalidInput = undefined;

        // Act & Assert
        expect(() => getTotalWordsFromString(invalidInput)).toThrowError(
            "expected string but received undefined"
        );
    });

    test("When the input is a single word, Then the function returns 1", () => {
        // Arrange
        const input = "hello";

        // Act
        const result = getTotalWordsFromString(input);

        // Assert
        expect(result).toBe(1);
    });

    test("When the input is a sentence with multiple words, Then the function returns the correct count", () => {
        // Arrange
        const input = "This is a test sentence.";

        // Act
        const result = getTotalWordsFromString(input);

        // Assert
        expect(result).toBe(5); // The sentence has 5 words
    });

    test("When the input has extra spaces, Then the function ignores them and returns the correct word count", () => {
        // Arrange
        const input = "   More   spaces   between   the   words   ";

        // Act
        const result = getTotalWordsFromString(input);

        // Assert
        expect(result).toBe(5); // Ignore leading, trailing, and multiple spaces
    });
});
