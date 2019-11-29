module.exports = {
    root: true,
    env: {
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint',
        allowImportExportEverywhere: true
    },
    extends: [
        'prettier',
        'prettier/vue',
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    plugins: ['prettier'],
    // add your custom rules here
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unused-vars': 1,
    }
};
