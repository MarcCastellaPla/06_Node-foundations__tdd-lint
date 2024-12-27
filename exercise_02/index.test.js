import { describe, test, expect } from "vitest";
import getTotalWordsFromString from "./getTotalWordsFromString.js";

describe("Given getTotalWordsFromString", () => {
    test("When the input isn't a string, Then an error is thrown", () => {
        // Arrange (Given)
        const invalidInput = 42;

        // Act (When) & Assert (Then)
        expect(() => getTotalWordsFromString(invalidInput)).toThrowError();
    });

    test("When the input isn't a string, Then an error is thrown with the specified message", () => {
        // Arrange (Given)
        const invalidInput = true;

        // Act (When) & Assert (Then)
        expect(() => getTotalWordsFromString(invalidInput)).toThrowError("expected string but received boolean");
    });

    test("When the input is undefined, Then an error is thrown with the specified message", () => {
        // Arrange (Given)
        const invalidInput = undefined;
    
        // Act (When) & Assert (Then)
        expect(() => getTotalWordsFromString(invalidInput)).toThrowError("expected string but received undefined");
    });
    
    test("When the input is a single word, Then the function returns 1", () => {
        // Arrange (Given)
        const input = "hello";

        // Act (When)
        const result = getTotalWordsFromString(input);

        // Assert (Then)
        expect(result).toBe(1);
    });

    test("When the input is a sentence with multiple words, Then the function returns the correct count", () => {
        // Arrange (Given)
        const input = "This is a test sentence.";

        // Act (When)
        const result = getTotalWordsFromString(input);

        // Assert (Then)
        expect(result).toBe(5); // The sentence has 5 words
    });

    test("When the input has extra spaces, Then the function ignores them and returns the correct word count", () => {
        // Arrange (Given)
        const input = "   Extra   spaces   between words   ";

        // Act (When)
        const result = getTotalWordsFromString(input);

        // Assert (Then)
        expect(result).toBe(4); // Ignore leading, trailing, and multiple spaces
    });
});
