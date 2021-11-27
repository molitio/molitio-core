import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
};

export default {
    input: 'src/index.ts',
    plugins: [typescript(), peerDepsExternal(), resolve(), commonjs(), peerDepsExternal()],
    output: [
        //unbundled esm
        {
            file: packageJson.module,
            format: 'esm',
            globals,
            sourcemap: true,
            plugins: [
                resolve({ extensions }),
                babel({
                    extensions,
                    include: ['src/**/*'],
                    exclude: 'node_modules/**',
                }),
            ],
        },
        //bundled esm
        {
            file: packageJson.bundle.esm,
            format: 'esm',
            globals,
            sourcemap: true,
            plugins: [
                resolve({ extensions }),
                babel({
                    extensions,
                    babelHelpers: 'bundled',
                    include: ['src/**/*'],
                    exclude: 'node_modules/**',
                }),
            ],
        },
        //unbundled cjs
        {
            file: packageJson.main,
            format: 'cjs',
            globals,
            sourcemap: true,
            plugins: [
                resolve({ extensions }),
                babel({
                    extensions,
                    include: ['src/**/*'],
                    exclude: 'node_modules/**',
                }),
            ],
        },
        //bundled umd
        {
            name: '@molitio-core/ui',
            file: packageJson.bundle.umd,
            format: 'umd',
            globals,
            sourcemap: true,
            plugins: [
                resolve({ extensions }),
                babel({
                    extensions,
                    babelHelpers: 'bundled',
                    include: ['src/**/*'],
                    exclude: 'node_modules/**',
                }),
            ],
        },
    ],

    external: Object.keys(globals),
};
