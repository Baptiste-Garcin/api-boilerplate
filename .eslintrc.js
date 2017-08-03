module.exports = {
    "extends": ["airbnb-base/legacy", "airbnb", "plugin:flowtype/recommended"],
    "plugins": ["flowtype"],
    "parser": "babel-eslint",
    rules: {
      "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
      "no-console": ["error", { allow: ["warn", "error"] }],
    }
};
