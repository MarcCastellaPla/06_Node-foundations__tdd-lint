import { describe, test, expect } from "vitest";
import formatStringByWordsLength from "./formatStringByWordsLength.js";

describe("Given formatStringByWordsLength", () => {
    test("When the input is not a string (number), Then an error is thrown with the specified message", () => {
        // Arrange (Given)
        const invalidInput = 12345;

        // Act (When) & Assert (Then)
        expect(() => formatStringByWordsLength(invalidInput)).toThrowError("expected string but received number");
    });

    test("When the input is not a string (boolean), Then an error is thrown with the specified message", () => {
        // Arrange (Given)
        const invalidInput = true;

        // Act (When) & Assert (Then)
        expect(() => formatStringByWordsLength(invalidInput)).toThrowError("expected string but received boolean");
    });

    test("When the input is not a string (null), Then an error is thrown with the specified message", () => {
        // Arrange (Given)
        const invalidInput = null;

        // Act (When) & Assert (Then)
        expect(() => formatStringByWordsLength(invalidInput)).toThrowError("expected string but received object");
    });

    test("When the sentence has more than 5 words, Then returns the string in uppercase", () => {
        // Arrange (Given)
        const input = "This is a sample sentence with seven words";

        // Act (When)
        const result = formatStringByWordsLength(input);

        // Assert (Then)
        expect(result).toBe(input.toUpperCase());
    });

    test("When the sentence has exactly 5 words, Then returns the string in lowercase", () => {
        // Arrange (Given)
        const input = "Five word sentence here";

        // Act (When)
        const result = formatStringByWordsLength(input);

        // Assert (Then)
        expect(result).toBe(input.toLowerCase());
    });

    test("When the sentence has fewer than 5 words, Then returns the string in lowercase", () => {
        // Arrange (Given)
        const input = "Short sentence";

        // Act (When)
        const result = formatStringByWordsLength(input);

        // Assert (Then)
        expect(result).toBe(input.toLowerCase());
    });
});
