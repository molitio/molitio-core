import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import buble from '@rollup/plugin-buble';
import size from 'rollup-plugin-size';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';

const packageJson = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';

const extensions = ['.ts', '.tsx', '.md', '.mdx', '.svg'];

const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
};

export default [
    {
        input: 'src/ui-page/radio-page/components/RadioPage.tsx',
        plugins: [
            peerDepsExternal(),
            typescript({
                tsconfig: './tsconfig.json',
                outDir: './dist',
                sourceMap: false,
                declaration: true,
                declarationDir: './dist',
                declarationMap: true,
                outputToFilesystem: true,
                exclude: ['node_modules/**', '**/*.stories.tsx'],
            }),
            json(),
            commonjs(),
            babel({
                extensions: [...extensions],
                babelHelpers: 'bundled',
                include: ['src/**/*'],
                exclude: ['node_modules/**', '**/*.stories.tsx'],
            }),
            nodeResolve(),
            postcss({
                extract: false,
                modules: true,
                use: ['sass'],
            }),
            image(),
            buble({ transforms: { forOf: false } }),
            size(),
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
                globals,
            },
        ],
    },
    {
        input: 'src/index.ts',
        plugins: [
            peerDepsExternal(),
            typescript({
                tsconfig: './tsconfig.json',
                outDir: '.',
                sourceMap: false,
                declaration: true,
                declarationDir: '.',
                declarationMap: true,
                outputToFilesystem: true,
                exclude: ['node_modules/**', '**/*.stories.tsx'],
            }),
            json(),
            commonjs(),
            babel({
                extensions: [...extensions],
                babelHelpers: 'bundled',
                include: ['src'],
                exclude: ['node_modules/**', '**/*.stories.tsx'],
            }),
            nodeResolve(),
            postcss({
                extract: false,
                modules: true,
                use: ['sass'],
            }),
            buble({ transforms: { forOf: false } }),
            size(),
            image(),
            replace({
                'process.env.NODE_ENV': JSON.stringify('production'),
                __buildDate__: () => JSON.stringify(new Date()),
                __buildVersion: 17,
                preventAssignment: true,
            }),
        ],
        output: [
            //unbundled esm
            {
                name: '@molitio/ui-core',
                file: packageJson.module,
                format: 'esm',
                exports: 'named',
                globals,
            },
            //bundled esm
            {
                name: '@molitio/ui-core',
                file: packageJson.bundle.esm,
                format: 'esm',
                exports: 'named',
                globals,
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
            },
        ],

        external: ['react', 'reactDom'],
    },
];
