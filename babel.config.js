module.exports = function (api) {
    api.cache(true);
  
    return {
        "presets": [
            "@babel/preset-react",
            ["@babel/preset-typescript", { "allExtensions": true, "isTSX": true }],
        ],
        "plugins": [
            "babel-plugin-styled-components",
            "@babel/plugin-syntax-dynamic-import",
            "@babel/proposal-class-properties",
            "@babel/proposal-object-rest-spread"
        ]
    }
}