const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    stories: ['../src/**/*.stories.@(tsx|mdx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
    typescript: {
        check: true, // type-check stories during Storybook build
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
        webpackFinal: async (config) => {
            config.resolve.plugins = [
                ...(config.resolve.plugins || []),
                new TsconfigPathsPlugin({
                    extensions: config.resolve.extensions,
                }),
            ];
            config.resolve.modules = [
                ...(config.resolve.modules || []),
                path.resolve(__dirname, 'src'),
                path.resolve(__dirname, 'node_modules'),
            ];
            config.resolve.extensions.push('.ts', '.tsx');
            return config;
        },
    },
};
