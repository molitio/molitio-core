import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import buble from 'rollup-plugin-buble';
import sizes from 'rollup-plugin-sizes';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';

const packageJson = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';

const extensions = ['.ts', '.tsx', '.md', '.mdx', '.svg'];

const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
};

export default [
    {
        input: 'src/ui-page-radio/component/RadioPage.tsx',
        plugins: [
            babel({
                extensions: [...extensions],
                babelHelpers: 'bundled',
                include: ['src/**/*'],
                exclude: 'node_modules/**',
            }),
            nodeResolve(),
            typescript({
                tsconfig: './tsconfig.json',
                outDir: './dist',
                declaration: true,
                declarationDir: './dist',
            }),
            commonjs(),
            image(),
            replace({
                'process.env.NODE_ENV': JSON.stringify('production'),
                __buildDate__: () => JSON.stringify(new Date()),
                __buildVersion: 17,
                preventAssignment: true,
            }),
        ],
        output: [
            //bundled iife
            {
                name: packageJson.iife.radioPage,
                file: packageJson.iife.radioPage,
                format: 'iife',
                sourcemap: true,
                globals,
            },
        ],
    },
    {
        input: 'src/index.ts',
        plugins: [
            babel({
                extensions: [...extensions],
                babelHelpers: 'bundled',
                include: ['src'],
                exclude: 'node_modules/**',
            }),
            nodeResolve(),
            commonjs(),
            typescript({
                tsconfig: './tsconfig.json',
                outDir: '.',
                declaration: true,
                declarationDir: '.',
                declarationMap: true,
            }),
            peerDepsExternal(),
            babel({
                extensions: [...extensions],
                babelHelpers: 'bundled',
                include: ['src'],
                exclude: 'node_modules/**',
            }),
            buble(),
            sizes(),
            replace({
                'process.env.NODE_ENV': JSON.stringify('production'),
                __buildDate__: () => JSON.stringify(new Date()),
                __buildVersion: 17,
                preventAssignment: true,
            }),
            image(),
        ],
        output: [
            //unbundled esm
            {
                name: '@molitio/ui-core',
                file: packageJson.module,
                format: 'esm',
                exports: 'named',
                globals,
                sourcemap: true,
            },
            //bundled esm
            {
                name: '@molitio/ui-core',
                file: packageJson.bundle.esm,
                format: 'esm',
                exports: 'named',
                globals,
                sourcemap: true,
            },
            //unbundled cjs
            {
                name: '@molitio/ui-core',
                file: packageJson.main,
                format: 'cjs',
                globals,
            },
            //bundled umd
            {
                name: '@molitio/ui-core',
                file: packageJson.bundle.umd,
                format: 'umd',
                globals,
                sourcemap: true,
            },
        ],

        external: ['react', 'reactDom'],
    },
];
