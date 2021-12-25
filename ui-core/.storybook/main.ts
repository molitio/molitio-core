import type { StorybookConfig } from '@storybook/react/types';
import path from 'path';

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
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
            },
        },
    ],
    typescript: {
        check: true,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
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
        warnOnLegacyHierarchySeparator: false,
    },
    framework: '@storybook/react',
};
module.exports = config;
