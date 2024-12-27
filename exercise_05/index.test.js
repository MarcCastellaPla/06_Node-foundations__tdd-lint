import { describe, test, expect } from "vitest";
import isAdditionGreaterThanFifty from "./isAdditionGreaterThanFifty.js";

describe("Given isAdditionGreaterThanFifty", () => {
    test("When the first input isn't a number, Then an error is thrown", () => {
        // Arrange (Given)
        const invalidSummand1 = "25"; // string instead of number
        const summand2 = 30;

        // Act (When) & Assert (Then)
        expect(() => isAdditionGreaterThanFifty(invalidSummand1, summand2)).toThrowError("expected number but received string" );
    });

    test("When the second input isn't a number, Then an error is thrown", () => {
        // Arrange (Given)
        const summand1 = 20;
        const invalidSummand2 = null; // null instead of number

        // Act (When) & Assert (Then)
        expect(() => isAdditionGreaterThanFifty(summand1, invalidSummand2)).toThrowError("expected number but received object");
    });

    test("When both inputs aren't numbers, Then an error is thrown for the first invalid input", () => {
        // Arrange (Given)
        const invalidSummand1 = undefined;
        const invalidSummand2 = "twenty";

        // Act (When) & Assert (Then)
        expect(() => isAdditionGreaterThanFifty(invalidSummand1, invalidSummand2)).toThrowError("expected number but received undefined");
    });

    test("When the sum of summand1 and summand2 is greater than 50, Then returns true", () => {
        // Arrange (Given)
        const summand1 = 30;
        const summand2 = 25;

        // Act (When)
        const result = isAdditionGreaterThanFifty(summand1, summand2);

        // Assert (Then)
        expect(result).toBe(true);
    });

    test("When the sum of summand1 and summand2 is exactly 50, Then returns true", () => {
        // Arrange (Given)
        const summand1 = 20;
        const summand2 = 30;

        // Act (When)
        const result = isAdditionGreaterThanFifty(summand1, summand2);

        // Assert (Then)
        expect(result).toBe(true);
    });

    test("When the sum of summand1 and summand2 is less than 50, Then returns false", () => {
        // Arrange (Given)
        const summand1 = 15;
        const summand2 = 20;

        // Act (When)
        const result = isAdditionGreaterThanFifty(summand1, summand2);

        // Assert (Then)
        expect(result).toBe(false);
    });
});
