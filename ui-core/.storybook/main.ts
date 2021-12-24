const path = require('path');
import type { StorybookConfig } from '@storybook/react/types';

const config: StorybookConfig = {
    stories: ['../src/*.stories.tsx'],
    logLevel: 'debug',
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-storysource',
        '@storybook/addon-storyshots',
        '@storybook/addon-a11y',
        {
            name: '@storybook/preset-typescript',
            options: {
                tsLoaderOptions: {
                    configFile: path.resolve(__dirname, '../tsconfig.json'),
                },
                tsDocgenLoaderOptions: {
                    tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
                },
                forkTsCheckerWebpackPluginOptions: {
                    colors: true, // disables built-in colors in logger messages
                },
            },
        },
    ],
    webpackFinal: (config) => {
        return {
            ...config,
            resolve: {
                ...config.resolve,
                modules: [path.resolve(__dirname, '..', 'src'), 'node_modules'],
                fallback: {
                    assert: require.resolve('assert-browserify/'),
                },
            },
        };
    },
    typescript: {
        check: true,
        checkOptions: {},
        reactDocgenTypescriptOptions: {
            propFilter: (prop) => ['label', 'disabled'].includes(prop.name),
        },
    },
    core: {
        builder: 'webpack5',
        channelOptions: { allowFunction: false, maxDepth: 10 },
    },
    features: {
        postcss: false,
        // modernInlineRender: true,
        storyStoreV7: !global.navigator?.userAgent?.match?.('jsdom'),
        buildStoriesJson: true,
        babelModeV7: true,
    },
    framework: '@storybook/react',
};

module.exports = config;
