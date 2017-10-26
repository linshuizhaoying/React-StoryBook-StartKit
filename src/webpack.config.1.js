// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig, env);
    // Extend it as you need.
    // For example, add typescript loader:
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('awesome-typescript-loader')
    });

    config.module.loaders.push({
        test: /\.less$/,
        exclude: /node_modules/,
        loaders: [ "style-loader", "css-loader", "less-loader" ] 
    })


    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.extensions.push(".css");
    config.resolve.extensions.push(".less");
    return config;
};