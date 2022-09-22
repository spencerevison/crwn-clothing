module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    "react-app",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
