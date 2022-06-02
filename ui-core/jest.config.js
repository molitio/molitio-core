/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    rootDir: './tests',
    verbose: true,
    transform: {
        '/.[jt]sx?$': 'ts-jest',
    },
};
