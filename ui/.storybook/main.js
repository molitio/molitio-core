module.exports = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    typescript: {
        reactDocgen: 'react-docgen',
    },
    babel: async options => ({
        ...options,
    }),
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
