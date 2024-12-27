import { describe, test, expect } from "vitest";
import isTypeOf from "./isTypeOf.js";

describe("Given isTypeOf", () => {
    test("When the specified type is not among the allowed types, Then an error is thrown", () => {
        // Arrange
        const value = "bar";
        const invalidType = "function";

        // Act & Assert
        expect(() => isTypeOf(value, invalidType)).toThrowError(
            "Expected one of 'string', 'number', 'boolean', 'array', but received 'function'"
        );
    });

    test("When the specified type is undefined, Then an error is thrown", () => {
        // Arrange
        const value = 142;
        const invalidType = undefined;

        // Act & Assert
        expect(() => isTypeOf(value, invalidType)).toThrowError(
            "Expected 'type' to be a string, but received a value of type 'undefined'"
        );
    });

    test("When the specified type is a number instead of a string, Then an error is thrown", () => {
        // Arrange
        const value = false;
        const invalidType = 123;

        // Act & Assert
        expect(() => isTypeOf(value, invalidType)).toThrowError(
            "Expected 'type' to be a string, but received a value of type 'number'"
        );
    });

    test("When value is a string and type is 'string', Then returns true", () => {
        // Arrange
        const value = "Testing is fun!";
        const type = "string";

        // Act
        const result = isTypeOf(value, type);

        // Assert
        expect(result).toBe(true);
    });

    test("When value is a number but type is 'string', Then returns false", () => {
        // Arrange
        const value = 451;
        const type = "string";

        // Act
        const result = isTypeOf(value, type);

        // Assert
        expect(result).toBe(false);
    });

    test("When value is an array and type is 'array', Then returns true", () => {
        // Arrange
        const value = ["item1", "item2", "item3"];
        const type = "array";

        // Act
        const result = isTypeOf(value, type);

        // Assert
        expect(result).toBe(true);
    });
});
