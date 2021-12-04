module.exports = {
    stories: ['../src/**/*.stories.@(tsx|mdx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
    typescript: {
        check: true, // type-check stories during Storybook build
    },
};
