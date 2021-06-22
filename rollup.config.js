import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs' 

const isProd = process.env.NODE_ENV === 'production'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
}

export default {
  input: './src/index.ts',

  output: [
    {
      file: './lib/index.js',
      format: 'umd',
      name: 'workingConfig',
      globals,
      sourcemap: true,
    },
    { file: './lib/index.js', format: 'umd', globals, sourcemap: true },
  ],
  plugins: [
    resolve({ extensions }),
    commonjs({
      include: '**/node_modules/**',
      namedExports: {},
    }),
    babel({
      extensions,
      include: ['src/**/*'],
      exclude: 'node_modules/**',
    }),
  ],
  external: Object.keys(globals),
}