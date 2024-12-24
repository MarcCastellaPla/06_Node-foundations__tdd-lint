# **Setting Up ESLint and Prettier in a Node.js Project**

This guide walks you through integrating **ESLint** and **Prettier** in your Node.js project to ensure consistent code quality and formatting.

## **Table of Contents**

- [Step 1: Install Required Dependencies](#step-1-install-required-dependencies)
- [Step 2: Create and Configure ESLint](#step-2-create-and-configure-eslint)
- [Step 3: Optional - Add a `.prettierrc` File](#step-3-optional---add-a-prettierrc-file)
- [Step 4: Configure VS Code Extensions](#step-4-configure-vs-code-extensions)
- [Step 5: Add Scripts to `package.json`](#step-5-add-scripts-to-packagejson)
- [Step 6: Verify Your Setup](#step-6-verify-your-setup)

## **Step 1: Install Required Dependencies**

Run the following commands to install ESLint, Prettier, and the necessary plugins:

```bash
# Install ESLint and Prettier
npm install eslint prettier --save-dev

# Install plugins for Prettier integration
npm install eslint-config-prettier eslint-plugin-prettier --save-dev
```

[Back to Table of Contents](#table-of-contents)

## **Step 2: Create and Configure ESLint**

1. **Generate an ESLint configuration file**:

   ```bash
   npx eslint --init
   ```

   Follow the prompts to initialize the configuration based on your project needs.

2. **Update your `eslint.config.js`**:

   Modify the file to integrate Prettier:

   ```js
   import globals from "globals";
   import pluginJs from "@eslint/js";
   import prettierConfig from "eslint-config-prettier";
   import prettierPlugin from "eslint-plugin-prettier";

   /** @type {import('eslint').Linter.Config[]} */
   export default [
     // Define global environment
     { languageOptions: { globals: globals.browser } },

     // Extend recommended ESLint rules
     pluginJs.configs.recommended,

     // Include Prettier plugin
     {
       plugins: { prettier: prettierPlugin },
       rules: {
         "prettier/prettier": "error", // Treat Prettier issues as errors
       },
     },

     // Disable ESLint rules conflicting with Prettier
     prettierConfig,
   ];
   ```

[Back to Table of Contents](#table-of-contents)

## **Step 3: Optional - Add a `.prettierrc` File**

A `.prettierrc` file is optional. If omitted, Prettier will use its [default configuration](https://prettier.io/docs/en/options.html).

### **Default Prettier Settings:**

- 2 spaces for indentation.
- Semicolons enabled (`true`).
- Double quotes (`false`).

### **To customize Prettier settings**, create a `.prettierrc` file:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2
}
```

**Note:** Adding a `.prettierrc` file may require further configuration to match your project’s style preferences.

[Back to Table of Contents](#table-of-contents)

## **Step 4: Configure VS Code Extensions**

### **1. Install Required Extensions**

Make sure to install these extensions in VS Code:

- **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**: Adds ESLint linting support.
- **[Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**: Adds Prettier formatting support.

### **2. Configure VS Code User Settings**

Open your VS Code **User Settings** (`Ctrl + ,` or `Cmd + ,` on macOS) and click the **Open Settings (JSON)** icon in the top-right corner.

Add the following configuration to manage your settings globally:

```json
{
  // Use Prettier as the default formatter
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  // Enable auto-formatting on save
  "editor.formatOnSave": true,

  // Ensure ESLint validates specific file types
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],

  // Automatically fix linting issues on save
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### **3. Configure Workspace Settings (Optional)**

To apply these settings only to the current project, create a `.vscode/settings.json` file in your project root and use the same configuration.

[Back to Table of Contents](#table-of-contents)

## **Step 5: Add Scripts to `package.json`**

Include the following scripts to simplify linting and formatting commands:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  "format": "prettier --write ."
}
```

[Back to Table of Contents](#table-of-contents)

## **Step 6: Verify Your Setup**

- **Check linting**:

  ```bash
  npm run lint
  ```

- **Fix linting issues**:

  ```bash
  npm run lint:fix
  ```

- **Format code**:
  ```bash
  npm run format
  ```

[Back to Table of Contents](#table-of-contents)

With these steps, you’ll have **ESLint** and **Prettier** working harmoniously in your project, ensuring clean, consistent, and well-formatted code.
