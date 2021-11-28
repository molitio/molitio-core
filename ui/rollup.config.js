import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import buble from 'rollup-plugin-buble';
import sizes from 'rollup-plugin-sizes';

const packageJson = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
};

export default {
    input: 'src/index.ts',
    plugins: [
        typescript(),
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
    ],
    output: [
        //unbundled esm
        {
            name: '@molitio-core/ui',
            file: packageJson.module,
            format: 'esm',
            globals,
            sourcemap: true,
            plugins: [],
        },
        //bundled esm
        {
            name: '@molitio-core/ui',
            file: packageJson.bundle.esm,
            format: 'esm',
            globals,
            sourcemap: true,
            plugins: [],
        },
        //unbundled cjs
        {
            name: '@molitio-core/ui',
            file: packageJson.main,
            format: 'cjs',
            globals,
            sourcemap: true,
            plugins: [],
        },
        //bundled umd
        {
            name: '@molitio-core/ui',
            file: packageJson.bundle.umd,
            format: 'umd',
            globals,
            sourcemap: true,
            plugins: [],
        },
    ],

    external: Object.keys(globals),
};
