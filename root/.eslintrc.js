module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: "module",
    },

    settings: {
        react: {
            createClass: "createReactClass",
            pragma: "React",
            version: "detect",
        }
    },
    extends: [
        "next",
        "prettier"
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },

    plugins: ["react", "react-hooks", "prettier"],
    rules: {
        "react/react-in-jsx-scope": "off",
        "no-useless-constructor": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/no-var-requires": "off",
        "no-constant-condition": "warn",
        "typescript-eslint/no-this-alias": "off",
        "@next/next/no-img-element": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "prettier/prettier": [
            "warn",
            {
                endOfLine: "auto",
            },
        ],
        "react/display-name": [0],
        "react/prop-types": [1],
        "no-unused-vars": [1],
        "no-console": "off",
        "no-empty": [0],
        quotes: [1, "single", { avoidEscape: true, allowTemplateLiterals: false }],
        semi: [1, "never"],
        "max-len": [
            1,
            {
                code: 120,
                ignoreUrls: true,
                ignoreComments: true,
                ignoreTemplateLiterals: true,
                ignoreStrings: true,
            },
        ],

        indent: "off",
        "no-restricted-syntax": [
            "warn",
            {
                selector: "SequenceExpression",
                message: "The comma operator is confusing and a common mistake. Don’t use it!",
            },
        ],
    },
};
