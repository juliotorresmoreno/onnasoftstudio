const webpack = require("webpack");
const { parsed: env } = require("dotenv").config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    const _entry = config.entry;
    config.entry = function () {
      return _entry(...arguments).then((result) => {
        result["main.js"] = ["/home/juliotorres/htdocs/website/src/index.ts"];
        //console.log("result", result);
        return result;
      });
    }.bind(config);
    //config.entry().then(console.log);
    config.plugins.push(new webpack.EnvironmentPlugin(env));
    config.resolve.alias = {
      ...config.resolve.alias,
      handlebars: "handlebars/dist/handlebars.js",
      sharp$: false,
      "onnxruntime-node$": false,
    };
    return config;
  },
};

module.exports = nextConfig;
