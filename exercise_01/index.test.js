import { describe, test, expect } from "vitest";
import getDistanceFromThreshold from "./getDistanceFromThreshold.js";

describe("Given getDistanceFromThreshold", () => {
  test("When the value isn't a number, Then an error is thrown", () => {
    // Arrange (Given)
    const invalidValue = "Hello, I am a string";
    const validThreshold = 10;

    // Act (When) & Assert (Then)
    expect(() => getDistanceFromThreshold(invalidValue, validThreshold)).toThrowError();
  });

  test("When the value isn't a number, and the threshold is valid Then an error is thrown with the specified message", () => {
    // Arrange (Given)
    const invalidValue = true;
    const validThreshold = 2;

    // Act (When) & Assert (Then)
    expect(() => getDistanceFromThreshold(invalidValue, validThreshold)).toThrowError("expected number but received boolean");
  });

  test("When the threshold isn't a number, Then an error is thrown with the specified message", () => {
    // Arrange (Given)
    const validValue = 10;
    const invalidThreshold = {};

    // Act (When) & Assert (Then)
    expect(() => getDistanceFromThreshold(validValue, invalidThreshold)).toThrowError("expected number but received object");
  });

  test("When both value and threshold are positive, and value < threshold, Then it returns a positive number (threshold - value)", () => {
    // Arrange (Given)
    const validValue = 10;
    const validThreshold = 15;

    // Act (When)
    const result = getDistanceFromThreshold(validValue, validThreshold);

    // Assert (Then)
    expect(result).toBe(5);
  });

  test("When both value and threshold are negative, and value > threshold, Then it returns a negative number (threshold - value)", () => {
    // Arrange (Given)
    const validValue = -10; 
    const validThreshold = -15;

    // Act (When)
    const result = getDistanceFromThreshold(validValue, validThreshold);

    // Assert (Then)
    expect(result).toBe(-5);
  });

  test("When the value is positive and the threshold is negative (value > threshold), Then the function returns a negative number", () => {
    // Arrange (Given)
    const validValue = 10;   // definitely above -15
    const validThreshold = -15;

    // Act (When)
    const result = getDistanceFromThreshold(validValue, validThreshold);

    // Assert (Then)
    expect(result).toBe(-25);
  });
});
