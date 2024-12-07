module.exports = {
  env: {
    browser: true, // Allows for browser global variables like `window` and `document`
    es2021: true,  // Supports ES2021 syntax
  },
  extends: [
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for parsing JSX
    },
    ecmaVersion: 12, // Supports modern ECMAScript features
    sourceType: 'module', // Allows for ES Modules
  },
  plugins: [
    'react', // React-specific linting plugin
  ],
  rules: {
    // Use recommended rules; add custom rules here if needed in the future
  },
};

