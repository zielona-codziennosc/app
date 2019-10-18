module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'env': {
        'jest': true,
        'react-native/react-native': true
    },
    'rules': {
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
        'comma-dangle': 'off',
        'global-require': 'off',
        'no-console': 'off'
    },
    'globals': {
        'fetch': false
    },
    'plugins': [
        'react',
        'react-native'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        }
    }
}