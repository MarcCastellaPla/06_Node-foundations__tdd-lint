import { describe, test, expect, vi } from "vitest";
import transformCollectionToString from "./transformCollectionToString.js";
import * as checkCollectionHasElementsModule from "../exercise_06/checkCollectionHasElements.js";

describe("Given transformCollectionToString", () => {
    test("When the input is not an array (string), Then an error is thrown", () => {
        // Arrange (Given)
        const invalidInput = "not an array";

        // Act (When) & Assert (Then)
        expect(() => transformCollectionToString(invalidInput)).toThrowError("expected array but received string");
    });

    test("When the input is not an array (number), Then an error is thrown", () => {
        // Arrange (Given)
        const invalidInput = 12345;

        // Act (When) & Assert (Then)
        expect(() => transformCollectionToString(invalidInput)).toThrowError("expected array but received number");
    });

    test("When the input is not an array (null), Then an error is thrown", () => {
        // Arrange (Given)
        const invalidInput = null;

        // Act (When) & Assert (Then)
        expect(() => transformCollectionToString(invalidInput)).toThrowError("expected array but received object");
    });

    // Functional tests
    test("When the array has elements, Then returns the elements joined by '|'", () => {
        // Arrange (Given)
        const input = ["apple", "banana", "cherry"];

        // Spy on checkCollectionHasElements and mock its return value
        const hasElementsSpy = vi.spyOn(checkCollectionHasElementsModule, 'default').mockReturnValue(true);

        // Act (When)
        const result = transformCollectionToString(input);

        // Assert (Then)
        expect(result).toBe("apple|banana|cherry");

        // Restore the spy
        hasElementsSpy.mockRestore();
    });

    test("When the array is empty, Then returns an empty string", () => {
        // Arrange (Given)
        const input = [];

        // Spy on checkCollectionHasElements and mock its return value
        const hasElementsSpy = vi.spyOn(checkCollectionHasElementsModule, 'default').mockReturnValue(false);

        // Act (When)
        const result = transformCollectionToString(input);

        // Assert (Then)
        expect(result).toBe("");

        // Restore the spy
        hasElementsSpy.mockRestore();
    });

    test("When the array has various element types, Then returns the elements joined by '|'", () => {
        // Arrange (Given)
        const input = [null, undefined, 42, "hello", { key: "value" }, [1, 2, 3]];
        
        // Act (When)
        const result = transformCollectionToString(input);

        // Assert (Then)
        expect(result).toBe("null|undefined|42|hello|[object Object]|1,2,3");
    });
});
