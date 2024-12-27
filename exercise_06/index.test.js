import { describe, test, expect } from "vitest";
import checkCollectionHasElements from "./checkCollectionHasElements.js";

describe("Given checkCollectionHasElements", () => {
    test("When the input is not an array (string), Then an error is thrown", () => {
        // Arrange (Given)
        const invalidInput = "not an array";

        // Act (When) & Assert (Then)
        expect(() => checkCollectionHasElements(invalidInput)).toThrowError("expected array but received string");
    });

    test("When the input is null, Then an error is thrown", () => {
        // Arrange (Given)
        const invalidInput = null;

        // Act (When) & Assert (Then)
        expect(() => checkCollectionHasElements(invalidInput)).toThrowError("expected array but received object");
    });

    test("When the input is undefined, Then an error is thrown", () => {
        // Arrange (Given)
        const invalidInput = undefined;

        // Act (When) & Assert (Then)
        expect(() => checkCollectionHasElements(invalidInput)).toThrowError("expected array but received undefined");
    });

    test("When the input is an empty array, Then returns false", () => {
        // Arrange (Given)
        const input = [];

        // Act (When)
        const result = checkCollectionHasElements(input);

        // Assert (Then)
        expect(result).toBe(false);
    });

    test("When the input is a non-empty array, Then returns true", () => {
        // Arrange (Given)
        const input = [1, 2, 3];

        // Act (When)
        const result = checkCollectionHasElements(input);

        // Assert (Then)
        expect(result).toBe(true);
    });

    test("When the input is an array with various element types, Then returns true", () => {
        // Arrange (Given)
        const input = [null, undefined, {}, [], "Hello, i am a string", 42];

        // Act (When)
        const result = checkCollectionHasElements(input);

        // Assert (Then)
        expect(result).toBe(true);
    });
});
