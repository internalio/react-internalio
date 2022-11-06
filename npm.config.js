const webpack = require("webpack");
const path = require("path");

const config = {
  entry: ["./src/index.package.ts"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "react-internalio",
    libraryTarget: "umd",
    umdNamedDefine: true,
    publicPath: "/dist/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    static: {
      directory: "./dist"
    }
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  }
};

module.exports = config;
