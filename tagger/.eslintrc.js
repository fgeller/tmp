module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["plugin:@typescript-eslint/recommended"], 
  env: {
    node: true,
  },
  rules: {
    'no-console': 'off'
  }
};
