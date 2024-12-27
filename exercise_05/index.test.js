import { describe, test, expect } from "vitest";
import isAdditionGreaterThanFifty from "./isAdditionGreaterThanFifty.js";

describe("Given isAdditionGreaterThanFifty", () => {
    test("When the first input is not a number, Then it throws an error with the correct message", () => {
        // Arrange
        const invalidInput = "141"; // string instead of number
        const summand2 = 78;

        // Act & Assert
        expect(() => isAdditionGreaterThanFifty(invalidInput, summand2)).toThrowError(
            "expected number but received string"
        );
    });

    test("When the second input is not a number, Then it throws an error with the correct message", () => {
        // Arrange
        const summand1 = 99;
        const invalidInput = undefined; // undefined instead of number

        // Act & Assert
        expect(() => isAdditionGreaterThanFifty(summand1, invalidInput)).toThrowError(
            "expected number but received undefined"
        );
    });

    test("When both inputs are not numbers, Then it throws an error for the first invalid input", () => {
        // Arrange
        const invalidInput1 = false; // boolean
        const invalidInput2 = "I am not a number"; // string

        // Act & Assert
        expect(() => isAdditionGreaterThanFifty(invalidInput1, invalidInput2)).toThrowError(
            "expected number but received boolean"
        );
    });

    test("When the sum of summand1 and summand2 is greater than 50, Then it returns true", () => {
        // Arrange
        const summand1 = 65;
        const summand2 = 12;

        // Act
        const result = isAdditionGreaterThanFifty(summand1, summand2);

        // Assert
        expect(result).toBe(true);
    });

    test("When the sum of summand1 and summand2 is exactly 50, Then it returns true", () => {
        // Arrange
        const summand1 = 10;
        const summand2 = 40;

        // Act
        const result = isAdditionGreaterThanFifty(summand1, summand2);

        // Assert
        expect(result).toBe(true);
    });

    test("When the sum of summand1 and summand2 is less than 50, Then it returns false", () => {
        // Arrange
        const summand1 = 5;
        const summand2 = 20;

        // Act
        const result = isAdditionGreaterThanFifty(summand1, summand2);

        // Assert
        expect(result).toBe(false);
    });
});
