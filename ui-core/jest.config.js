/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const { defaults } = require('jest-config');

module.exports = {
    ...defaults,
    //preset: 'babel-jest',
    testEnvironment: 'jsdom',
    //roots: ['./src'],
    rootDir: './.artifact/__tests__',
    verbose: true,
    transform: {
        '^.+\\.[jt]sx?$': 'babel-jest',
    },
    /*     transform: {
        // '^.+\\.[jt]sx?$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
    }, */
    //setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each', '@testing-library/jest-dom/extend-expect'],
    extensionsToTreatAsEsm: ['.ts, .tsx'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
   // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    testPathIgnorePatterns: [`\\.cache`],
    /* testPathIgnorePatterns: ['globals.d.ts', `\\.cache`], */
    testEnvironmentOptions: { url: `http://localhost:3999` },
    /*    globals: {
        'ts-jest': {
            tsconfig: './tsconfig.json',
        },
    }, */
};
