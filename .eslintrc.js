module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		global: true,
	},
	extends: "eslint:recommended",
	overrides: [
		{
			files: ["**/*.test.js", "**/*.mock.js"],
			env: { jest: true },
			plugins: ["jest"],
			extends: ["plugin:jest/recommended"],
			rules: { "jest/prefer-expect-assertions": "off" },
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {},
};
