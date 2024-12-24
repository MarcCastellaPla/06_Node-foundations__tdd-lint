# Introduction to Node and NPM

## Table of Contents

1. [What is Node?](#1-what-is-node)
2. [What is NPM?](#2-what-is-npm)
3. [How to Create a Node Project](#3-how-to-create-a-node-project)

---

## 1. What is Node?

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code outside the browser, typically on a server, which enables the development of server-side applications.

Node.js is event-driven and non-blocking, meaning it can handle many connections simultaneously without getting stuck waiting for tasks like file reading or database queries to complete. This makes it a popular choice for building scalable, high-performance applications such as web servers, APIs, and real-time apps.

### Key Features:

- **Asynchronous and event-driven**: Node.js uses event-driven architecture, which allows it to handle multiple operations without waiting for each one to complete.
- **Non-blocking I/O**: It performs operations like reading files, network requests, or database queries without blocking the rest of the application.
- **Single-threaded**: It uses a single thread with event looping, making it lightweight and efficient for handling numerous connections.

[Back to Table of Contents](#table-of-contents)

---

## 2. What is NPM?

NPM (Node Package Manager) is a package manager for Node.js that helps you manage libraries, frameworks, and tools that your application depends on. It allows you to easily install, share, and manage these dependencies in your Node.js projects.

### **Difference Between Production Dependencies and Development Dependencies**

- **Production Dependencies**: These are the libraries or packages required for the app to run in production. They are typically installed using `npm install <package>`.
  - Example: Express.js (for building a server)
- **Development Dependencies**: These are the tools required only for development, such as testing frameworks, build tools, or transpilers. They are installed using `npm install <package> --save-dev`.
  - Example: Jest (for running unit tests), Webpack (for bundling files)

### **How to Install Dependencies**

To install dependencies, you can run the following commands:

- Install all dependencies from `package.json`:

  ```bash
  npm install      # install locally, no flags needed
  ```

- Install a specific package:

  ```bash
  npm install <package-name>    # latest stable version
  npm install <package-name>@latest    # explicitly install the latest version
  ```

- Install a specific package with an **exact version** (no caret):

  ```bash
  npm install <package-name>@<version>   # install a specific version, e.g., npm install lodash@4.17.21
  npm install <package-name>@1.2.3   # exact version, no range allowed
  ```

  By default, NPM allows the installation of version ranges using caret (`^`). If you want to install an exact version without allowing minor or patch updates, you can use the `--exact` flag (`-E`), which installs the exact version specified, locking the package to that version.

  **Example**:

  ```bash
  npm install lodash@4.17.21 --exact    # Ensures lodash 4.17.21 is installed exactly
  npm install lodash@4.17.21 -E         # Same as above with the shorthand flag
  ```

- Install a specific package as a **development dependency**:

  ```bash
  npm install <package-name> --save-dev   # install as a dev dependency
  npm install <package-name> -D           # shorthand flag for dev dependencies
  ```

- Install a specific package as a **development dependency with an exact version**:
  ```bash
  npm install <package-name> --save-dev --exact    # install as a dev dependency with exact version
  npm install <package-name> -D -E                   # shorthand flags for dev dependency with exact version
  ```

### **How Does Installing Exact Versions Impact SemVer?**

When you install a package with an exact version, such as `npm install <package-name>@1.2.3`, you are locking the version of that package to the specific version you provided. This prevents NPM from updating the package, even if newer versions are available. This is particularly useful in environments where stability is important and you want to ensure that the project will always work with a specific version.

If you want to ensure that **no version range is applied**, you can use the `--exact` flag (`-E`). This flag tells NPM to ignore the usual version range handling (like using caret `^` or tilde `~`), and it will strictly install the exact version you specify.

When using SemVer (Semantic Versioning), specifying an exact version ignores the flexibility SemVer offers with version ranges. For example:

- `npm install <package-name>@1.2.3` will install version `1.2.3`, but it could still allow updates within a compatible version range if the caret `^` was used.
- `npm install <package-name>@1.2.3 --exact` or `npm install <package-name>@1.2.3 -E` installs **exactly version `1.2.3`**, without any possibility of upgrading even for minor or patch versions.

- `npm install <package-name>@^1.2.3` would allow `1.x.x` versions to be installed (including future 1.3.0 or 1.4.0 versions).

- `npm install <package-name>@~1.2.3` allows for patch updates within the `1.2.x` range (e.g., 1.2.4 but not 1.3.0).

By using exact versions, you ensure that your project is always using the same version of a package, no matter the environment, but you miss out on receiving automatic updates or bug fixes unless you manually update the version.

[Back to Table of Contents](#table-of-contents)

### **What is `node_modules`?**

The `node_modules` directory is where NPM stores the installed dependencies for your project. When you run `npm install`, NPM will fetch the required packages from the NPM registry and store them in this folder. This directory contains all the libraries and their respective versions that your project needs to function.

Key points:

- **Local project storage**: `node_modules` is located in your project’s root directory and is created automatically when you install dependencies.
- **Not committed to version control**: Typically, `node_modules` is excluded from version control (e.g., using `.gitignore`), as it can be regenerated at any time by running `npm install`.
- **Nested dependencies**: If your project’s dependencies themselves have dependencies, those are installed within `node_modules` as well, creating a nested structure.

Example of `node_modules` structure:

```
node_modules/
  ├── express/
  ├── lodash/
  └── ...
```

### **Semver (Semantic Versioning)**

Semantic Versioning (SemVer) is a versioning system used by NPM to manage package versions. It follows the format:  
`MAJOR.MINOR.PATCH`.

- **MAJOR**: Incremented when there are breaking changes.
- **MINOR**: Incremented when new features are added in a backward-compatible manner.
- **PATCH**: Incremented when backward-compatible bug fixes are made.

Example: A version `1.2.3` means:

- **1**: Major version (backward-incompatible changes)
- **2**: Minor version (new features, backward-compatible)
- **3**: Patch version (bug fixes, backward-compatible)

When installing a package, you can specify the version using operators like:

- `npm install <package-name>@1.2.3` (exact version)
- `npm install <package-name>@^1.2.3` (compatible with 1.2.3, allowing changes in minor or patch versions)
- `npm install <package-name>@~1.2.3` (compatible with 1.2.x, allowing only patch updates)

[Back to Table of Contents](#table-of-contents)

---

## 3. How to Create a Node Project

Creating a Node.js project starts with initializing it via NPM. This process creates a `package.json` file where all the metadata and dependencies of your project will be stored.

### **Steps to Create a Node Project**

1. Initialize a new Node.js project:

   ```
   npm init -y    # skips questions and initializes with default values
   npm init       # prompts you for details
   ```

2. Once initialized, you'll have a `package.json` file in your project root. This file contains key information about your project and the dependencies it uses.

### **package.json Structure**

The `package.json` file contains several important fields, such as:

- **name**: The name of your project.
- **version**: The version of your project.
- **description**: A short description of your project.
- **main**: The entry point file (usually `index.js`).
- **scripts**: A set of commands that can be run using `npm run`.
- **dependencies**: The production dependencies (installed using `npm install`).
- **devDependencies**: The development dependencies (installed using `npm install --save-dev`).
- **engines**: Specifies which versions of Node.js your project is compatible with.

Here’s an example of a basic `package.json` file:

```json
{
  "name": "my-node-project",
  "version": "1.0.0",
  "description": "A simple Node.js project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"No tests yet\""
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  },
  "author": "Your Name",
  "license": "MIT"
}
```

### **What is package-lock.json?**

The `package-lock.json` file is automatically generated when you install dependencies. It locks the versions of all installed packages, ensuring that the same versions are installed on every machine where the project is set up. This helps avoid potential issues caused by differences in package versions across environments.

Key points:

- It ensures consistency across different environments and developers.
- It contains detailed metadata about the installed packages, including their dependencies.

### **What are Scripts in package.json?**

The `scripts` section of the `package.json` file allows you to define custom commands that can be run with `npm run <script-name>`. Common scripts include:

- `start`: The command that runs the application, often used to start the server.
- `test`: The command to run tests.
- `build`: A command to build the application for production.

Example:

```json
"scripts": {
  "start": "node server.js",
  "test": "vitest",
  "dev": "nodemon server.js",
  "format": "prettier --write .",
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
```

To run these scripts, you can use the following commands:

- `npm start`
- `npm test`
- `npm run dev`
- `npm run format`
- `npm run lint`
- `npm run lint:fix`

These scripts allow for more efficient and streamlined development workflows.

[Back to Table of Contents](#table-of-contents)
