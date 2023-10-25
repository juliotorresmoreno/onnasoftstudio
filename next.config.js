const webpack = require("webpack");
const { parsed: env } = require("dotenv").config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(env));
    return config;
  },
};

module.exports = nextConfig;
