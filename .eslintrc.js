module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: false,
	},
	extends: ["eslint:recommended", "plugin:react/recommended"],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	// Severity should be one of the following: 0 = off, 1 = warn, 2 = error
	rules: {
		"react/react-in-jsx-scope": 0,
		"react/prop-types": 0,
		"no-unused-vars": 1,
	},
};
