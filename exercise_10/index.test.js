import { describe, test, expect, vi } from "vitest";
import transformCollectionToString from "./transformCollectionToString.js";
import * as checkCollectionHasElementsModule from "../exercise_06/checkCollectionHasElements.js";

describe("Given transformCollectionToString", () => {
    test("When the input is not an array (string), Then an error is thrown with the specified message", () => {
        // Arrange
        const invalidInput = "not an array";

        // Act & Assert
        expect(() => transformCollectionToString(invalidInput)).toThrowError("expected array but received string");
    });

    test("When the input is not an array (number), Then an error is thrown with the specified message", () => {
        // Arrange
        const invalidInput = 12345;

        // Act & Assert
        expect(() => transformCollectionToString(invalidInput)).toThrowError("expected array but received number");
    });

    test("When the input is not an array (null), Then an error is thrown with the specified message", () => {
        // Arrange
        const invalidInput = null;

        // Act & Assert
        expect(() => transformCollectionToString(invalidInput)).toThrowError("expected array but received object");
    });

    test("When the array has elements, Then returns the elements joined by '|'", () => {
        // Arrange
        const input = ["apple", "banana", "cherry"];
        const hasElementsSpy = vi.spyOn(checkCollectionHasElementsModule, "default").mockReturnValue(true);

        // Act
        const result = transformCollectionToString(input);

        // Assert
        expect(result).toBe("apple|banana|cherry");

        // Restore the spy
        hasElementsSpy.mockRestore();
    });

    test("When the array is empty, Then returns an empty string", () => {
        // Arrange
        const input = [];
        const hasElementsSpy = vi.spyOn(checkCollectionHasElementsModule, "default").mockReturnValue(false);

        // Act
        const result = transformCollectionToString(input);

        // Assert
        expect(result).toBe("");

        // Restore the spy
        hasElementsSpy.mockRestore();
    });

    test("When the array has various element types, Then returns the elements joined by '|'", () => {
        // Arrange
        const input = [null, undefined, 42, "hello", { key: "value" }, [1, 2, 3]];

        // Act
        const result = transformCollectionToString(input);

        // Assert
        expect(result).toBe("null|undefined|42|hello|[object Object]|1,2,3");
    });
});
