import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import buble from 'rollup-plugin-buble';
import sizes from 'rollup-plugin-sizes';
import replace from '@rollup/plugin-replace';

const packageJson = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';

const extensions = ['.ts', '.tsx', '.md', '.mdx'];

const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
};

export default [
    {
        input: 'src/ui-page-radio/component/RadioPage.tsx',
        plugins: [commonjs(), typescript()],
        output: [
            //bundled iife
            {
                file: packageJson.iife.radioPage,
                format: 'iife',
                bundled: true,
                globals,
            },
        ],
    },
    {
        input: 'src/index.ts',
        plugins: [
            typescript({ tsconfig: './tsconfig.json' }),
            peerDepsExternal(),
            resolve(),
            commonjs(),
            peerDepsExternal(),
            buble(),
            sizes(),
            babel({
                extensions,
                babelHelpers: 'bundled',
                include: ['src/**/*'],
                exclude: 'node_modules/**',
            }),
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
                sourcemap: true,
                plugins: [],
            },
            //bundled esm
            {
                name: '@molitio/ui-core',
                file: packageJson.bundle.esm,
                format: 'esm',
                exports: 'named',
                bundled: true,
                globals,
                sourcemap: true,
                plugins: [],
            },
            //unbundled cjs
            {
                name: '@molitio/ui-core',
                file: packageJson.main,
                format: 'cjs',
                globals,
                sourcemap: true,
                plugins: [],
            },
            //bundled umd
            {
                name: '@molitio/ui-core',
                file: packageJson.bundle.umd,
                format: 'umd',
                bundled: true,
                globals,
                sourcemap: true,
                plugins: [],
            },
        ],

        external: Object.keys(globals),
    },
];
