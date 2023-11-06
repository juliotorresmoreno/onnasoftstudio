const webpack = require("webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      handlebars: "handlebars/dist/handlebars.js",
      sharp$: false,
      "onnxruntime-node$": false,
    };

    return config;
  },
  images: {
    remotePatterns: [],
  },
};

module.exports = nextConfig;
