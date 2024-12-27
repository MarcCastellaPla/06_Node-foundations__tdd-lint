import { describe, test, expect } from "vitest";
import checkCollectionHasElements from "./checkCollectionHasElements.js";

describe("Given checkCollectionHasElements", () => {
    test("When the input is not an array (string), Then an error is thrown", () => {
        // Arrange
        const invalidInput = "I am definitely not an array";

        // Act & Assert
        expect(() => checkCollectionHasElements(invalidInput)).toThrowError("expected array but received string");
    });

    test("When the input is null, Then an error is thrown", () => {
        // Arrange
        const invalidInput = null;

        // Act & Assert
        expect(() => checkCollectionHasElements(invalidInput)).toThrowError("expected array but received object");
    });

    test("When the input is undefined, Then an error is thrown", () => {
        // Arrange
        const invalidInput = undefined;

        // Act & Assert
        expect(() => checkCollectionHasElements(invalidInput)).toThrowError("expected array but received undefined");
    });

    test("When the input is an empty array, Then returns false", () => {
        // Arrange
        const input = [];

        // Act
        const result = checkCollectionHasElements(input);

        // Assert
        expect(result).toBe(false);
    });

    test("When the input is a non-empty array, Then returns true", () => {
        // Arrange
        const input = [112, 61, 12];

        // Act
        const result = checkCollectionHasElements(input);

        // Assert
        expect(result).toBe(true);
    });

    test("When the input is an array with various element types, Then returns true", () => {
        // Arrange
        const input = [false, "I am a string", {}, [9, 6, 3], 952];

        // Act
        const result = checkCollectionHasElements(input);

        // Assert
        expect(result).toBe(true);
    });
});
