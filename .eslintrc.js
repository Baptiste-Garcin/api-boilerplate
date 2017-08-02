module.exports = {
    "extends": ["airbnb-base/legacy", "airbnb", "plugin:flowtype/recommended"],
    "plugins": ["flowtype"],
    "parser": "babel-eslint",
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }]
    }
};
