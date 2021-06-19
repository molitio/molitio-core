const babel = () => require('@rollup/plugin-babel');
module.exports = {
    input: 'src/index.ts',
    output: {
        dir: 'lib',
        format: 'cjs',
    },
    plugins: [babel({ babelHelpers: 'bundled' })],
};
