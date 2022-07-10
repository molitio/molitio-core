const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/preset-scss',
        '@storybook/addon-outline',
        'storybook-addon-designs',
     //   '@storybook/addon-jest',
        // module
        /*         {
            name: `@storybook/preset-scss`,
            options: {
                rule: {
                    test: /\.module\.s[ca]ss$/,
                },
                cssLoaderOptions: {
                    modules: {
                        localIdentName: '[name]__[local]--[hash:base64:5]',
                    },
                },
            },
        }, */
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    webpackFinal: async (config) => {
        if (!config.resolve) {
            config.resolve = {};
        }

        config.resolve.plugins = [...(config.resolve.plugins || []), new TsconfigPathsPlugin()];

        return config;
    },
    /*     webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.s(a|c)ss$/,
            include: path.resolve(__dirname, '../'),
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            auto: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                        },
                    },
                },
                'sass-loader',
            ],
        });
        return config;
    }, */
    /*    webpackFinal: async (config) => {
        // add SCSS support for CSS Modules
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader?modules&importLoaders', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
        });

        return config;
    }, */
};
