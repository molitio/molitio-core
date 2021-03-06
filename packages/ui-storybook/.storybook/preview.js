export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    controls: { expanded: true },
    backgrounds: {
        values: [{ name: 'Transparent', value: 'rgba(0, 0, 0, 0.0)' }],
    },
};
