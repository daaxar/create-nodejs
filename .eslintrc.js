module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['jest'],
    rules: {
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
    },
};
