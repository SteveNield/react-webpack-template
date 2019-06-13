module.exports = api => {
    const presets = [
        "@babel/preset-react",
        "@babel/preset-env"
    ];
    
    const plugins = [];

    if (api.env() === 'production'){
        plugins.push("babel-plugin-jsx-remove-data-test-id");
    }

    return {
        plugins,
        presets
    }
}
