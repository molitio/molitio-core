module.exports = (api) => {
    const isTest = api.env('test');
    if (isTest) {
        console.warn('it is in test environment');
    }
    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        node: 'current',
                        browsers: '> 0.5%, ie >= 11',
                    },
                    modules: false,
                    spec: true,
                    useBuiltIns: 'usage',
                    forceAllTransforms: true,
                    corejs: {
                        version: 3,
                        proposals: false,
                    },
                },
            ],
            '@babel/preset-react',
            '@babel/preset-typescript',
        ],
        plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'],
    };
};
