import { describe, test, expect } from "vitest";
import getDistanceFromThreshold from "./getDistanceFromThreshold.js";

describe("Given getDistanceFromThreshold", () => {
  test("When the value is not a number, Then an error is thrown", () => {
    // Arrange
    const invalidValue = "Hello, I am a string";
    const validThreshold = 8;

    // Act & Assert
    expect(() => getDistanceFromThreshold(invalidValue, validThreshold)).toThrowError();
  });

  test("When the value is not a number and the threshold is valid, Then an error is thrown with the correct message", () => {
    // Arrange
    const invalidValue = null;
    const validThreshold = 2;

    // Act & Assert
    expect(() => getDistanceFromThreshold(invalidValue, validThreshold)).toThrowError(
      "expected number but received object"
    );
  });

  test("When the threshold is not a number, Then an error is thrown with the correct message", () => {
    // Arrange
    const validValue = 10;
    const invalidThreshold = {};

    // Act & Assert
    expect(() => getDistanceFromThreshold(validValue, invalidThreshold)).toThrowError(
      "expected number but received object"
    );
  });

  test("When value and threshold are positive and value < threshold, Then it returns a positive number", () => {
    // Arrange
    const validValue = 10;
    const validThreshold = 15;

    // Act
    const result = getDistanceFromThreshold(validValue, validThreshold);

    // Assert
    expect(result).toBe(5);
  });

  test("When value and threshold are negative and value > threshold, Then it returns a negative number", () => {
    // Arrange
    const validValue = -10;
    const validThreshold = -15;

    // Act
    const result = getDistanceFromThreshold(validValue, validThreshold);

    // Assert
    expect(result).toBe(-5);
  });

  test("When value is positive and threshold is negative, Then it returns a negative number", () => {
    // Arrange
    const validValue = 10;
    const validThreshold = -15;

    // Act
    const result = getDistanceFromThreshold(validValue, validThreshold);

    // Assert
    expect(result).toBe(-25);
  });

  test("When value equals threshold, Then it returns 0", () => {
    // Arrange
    const validValue = 20;
    const validThreshold = 20;

    // Act
    const result = getDistanceFromThreshold(validValue, validThreshold);

    // Assert
    expect(result).toBe(0);
  });
});
