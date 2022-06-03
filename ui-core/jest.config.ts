/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
import 'ts-jest/dist/types';

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    //roots: ['./src'],
    rootDir: './__tests__',
    verbose: true,
    transform: {
        // '^.+\\.[jt]sx?$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
    },
    //setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each', '@testing-library/jest-dom/extend-expect'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    testPathIgnorePatterns: ['globals.d.ts'],
    /*    globals: {
        'ts-jest': {
            tsconfig: './tsconfig.json',
        },
    }, */
};
