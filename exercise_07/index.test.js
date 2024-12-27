import { describe, test, expect } from "vitest";
import isTypeOf from "./isTypeOf.js";

describe("Given isTypeOf", () => {
    test("When the specified type is not among the allowed types, Then an error is thrown", () => {
        // Arrange (Given)
        const value = "test";
        const invalidType = "object"; // 'object' is not an allowed type in validTypes

        // Act (When) & Assert (Then)
        expect(() => isTypeOf(value, invalidType)).toThrowError("expected one of 'string', 'number', 'boolean', 'array' but received string");
    });

    test("When the specified type is undefined, Then an error is thrown", () => {
        // Arrange (Given)
        const value = 42;
        const invalidType = undefined;

        // Act (When) & Assert (Then)
        expect(() => isTypeOf(value, invalidType)).toThrowError("expected one of 'string', 'number', 'boolean', 'array' but received undefined");
    });

    test("When the specified type is a number instead of a string, Then an error is thrown", () => {
        // Arrange (Given)
        const value = true;
        const invalidType = 123; // Type is a number instead of a string

        // Act (When) & Assert (Then)
        expect(() => isTypeOf(value, invalidType)).toThrowError("expected one of 'string', 'number', 'boolean', 'array' but received number");
    });

    test("When value is a string and type is 'string', Then returns true", () => {
        // Arrange (Given)
        const value = "Hello, World!";
        const type = "string";

        // Act (When)
        const result = isTypeOf(value, type);

        // Assert (Then)
        expect(result).toBe(true);
    });

    test("When value is a number but type is 'string', Then returns false", () => {
        // Arrange (Given)
        const value = 100;
        const type = "string";

        // Act (When)
        const result = isTypeOf(value, type);

        // Assert (Then)
        expect(result).toBe(false);
    });

    test("When value is an array and type is 'array', Then returns false", () => {
        // Arrange (Given)
        const value = [1, 2, 3];
        const type = "array";

        // Act (When)
        const result = isTypeOf(value, type);

        // Assert (Then)
        expect(result).toBe(false); // Because typeof [] === 'object', not 'array'
    });
});
