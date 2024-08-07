import globals from 'globals'
import pluginJs from '@eslint/js'

export default 
    {
        parserOptions: {
            ecmaVersion: 12,
            sourceType: 'module',
        },
        extends: ['eslint:recommended', 'prettier'],
        env: {
            es2021: true,
            node: true,
        },
        rules: {
            'no-console': 'error',
            'no-unused-vars': 'warn',
        },
    }

