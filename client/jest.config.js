module.exports = {
    roots: ['<rootDir>/src'],
    moduleNameMapper: {
        '^app/(.*)$': '<rootDir>/src/app/$1'
    },
    setupFiles: ['<rootDir>/setupTests.ts'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '.+\\.(css|styl|less|sass|scss|png|jpg|svg|gif|ttf|woff|woff2)$': 'jest-transform-stub'
    },
    testRegex: '.*/__tests__/.*(\\.|/)(test|spec)\\.(ts|tsx)?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.test.json'
        }
    }
};
