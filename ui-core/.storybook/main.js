const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.*'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/theming', '@storybook/addon-a11y'],
    webpackFinal: async (config) => {
        if (!config.resolve) {
            config.resolve = {};
        }

        config.resolve.plugins = [...(config.resolve.plugins || []), new TsconfigPathsPlugin()];

        return config;
    },
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
};
