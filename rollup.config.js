import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const isProd = process.env.NODE_ENV === 'production';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
};

export default {
    input: './src/index.ts',

    output: [
        //unbundled esm
        {
            name: 'molitio-ui-core',
            file: './lib/index.esm.js',
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
            name: 'molitio-ui-core',
            file: './lib/bundled/index.esm.js',
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
            file: './lib/index.cjs.js',
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
            file: './lib/bundled/index.umd.js',
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
