# Testing Documentation

## Table of Contents

1. [What is TDD](#what-is-tdd)
   - [Why is Testing Important?](#why-is-testing-important)
   - [TDD Cycle](#tdd-cycle)
2. [Define a Test](#define-a-test)
   - [describe / it | test / expect (Vitest)](#describe-it-test-expect-vitest)
   - [A | A | A (Arrange | Act | Assert)](#a-a-a-arrange-act-assert)
   - [Run TDD Cycle](#run-tdd-cycle)
3. [Install Vitest](#install-vitest)
   - [npm install Command](#npm-install-command)
   - [Define First Test](#define-first-test)
   - [Define Script](#define-script)

## What is TDD

### What is TDD

Test-Driven Development (TDD) is a software development methodology where tests are written before the code that needs to be tested. The process ensures that the code being written meets the requirements by continuously validating its behavior against predefined tests.

### Why is Testing Important?

Testing plays a crucial role in maintaining code quality. Some key reasons include:

- **Secure Refactoring**: By writing tests first, developers ensure that refactoring does not break the existing functionality.
- **Documentation**: Tests can serve as documentation that explains how a component should behave.
- **Continuous Validation**: Automated tests allow for immediate feedback on changes, reducing the risk of errors.

### TDD Cycle

The TDD cycle follows three simple steps:

1. **Red**: Write a failing test (the test should fail initially since the functionality isn’t implemented yet).
2. **Green**: Write the minimum amount of code to make the test pass.
3. **Refactor**: Clean up the code without changing its functionality while ensuring the test still passes.

[Back to top](#table-of-contents)

## Define a Test

### describe / it | test / expect

- **describe**: Group related tests.
- **it**: Defines an individual test case.
- **test**: An alias for `it`.
- **expect**: Defines the expectation for the test.

Example:

```js
describe("add function", () => {
  it("should return the correct sum", () => {
    expect(add(1, 2)).toBe(3);
  });
});
```

### A | A | A (Arrange | Act | Assert)

- **Arrange**: Set up the initial conditions (inputs, mocks).
- **Act**: Perform the action or call the method under test.
- **Assert**: Verify the result or behavior using assertions.

Example:

```js
describe("subtract function", () => {
  it("should subtract two numbers correctly", () => {
    // Arrange
    const num1 = 5;
    const num2 = 2;

    // Act
    const result = subtract(num1, num2);

    // Assert
    expect(result).toBe(3);
  });
});
```

### Run TDD Cycle

1. **Red**: Write the test above and run it (it will fail).
2. **Green**: Implement the `multiply` function to make the test pass.
3. **Refactor**: Refactor the code while ensuring that the test continues to pass.

[Back to top](#table-of-contents)

## Install Vitest

### npm install Command

To get started with Vitest, install it as a development dependency:

```bash
npm install vitest --save-dev
```

- **`--save-dev`**: Indicates that the package is needed only for development, not for production.

### Define First Test

Start by writing a simple test to verify a basic function. For example:

```js
import { describe, it, expect } from "vitest";

describe("multiply function", () => {
  it("should multiply numbers correctly", () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
```

### Define Script

After installation, you need to add Vitest to the `scripts` section of your `package.json`. This will allow you to run tests easily.

Example:

```json
"scripts": {
  "test": "vitest"
}
```

You can now run your tests using:

```bash
npm run test
```

[Back to top](#table-of-contents)
