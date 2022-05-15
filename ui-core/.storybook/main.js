const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.*'],
    //TODO: resolve issues with: '@storybook/addon-a11y
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/theming',
     /*    {
            name: 'storybook-addon-sass-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        }, */
        {
            name: '@storybook/preset-scss',
            options: {
                cssLoaderOptions: {
                    modules: true,
                   // localIdentName: '[name]__[local]--[hash:base64:5]',
                },
            },
        },
    ],
    webpackFinal: async (config) => {
        if (!config.resolve) {
            config.resolve = {};
        }

        config.resolve.plugins = [...(config.resolve.plugins || []), new TsconfigPathsPlugin()];

        /*      config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
        }); */

        return config;
    },
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
};
