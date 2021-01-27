const path = require("path");

module.exports = {
  // bundling mode
  mode: "production",

  // entry files
  entry: "./src/index.ts",

  entry: {
    "module/pages/side": "./src/pages/side.ts",
    "module/pages/ollp": "./src/pages/ollp.ts",
  },

  // output bundles (location)
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },

  // file resolutions
  resolve: {
    extensions: [".ts", ".js"],
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  watch: true,
};
