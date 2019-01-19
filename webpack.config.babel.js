import webpack, { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import * as Path from "path";
import * as helpers from "./src/config/helpers";

const { HotModuleReplacementPlugin } = webpack;

export default {
  entry: {
    polyfill: "./src/polyfills.ts",
    vendor: "./src/vendor.ts",
    app: "./src/main.ts"
  },

  mode: "development",

  output: {
    path: helpers.root("dist"),
    publicPath: "/",
    filename: "[name].js"
  },

  devServer: {
    port: 9999
  },

  resolve: {
    extensions: [".ts", ".js"]
  },

  module: {
    rules: [
      { test: /\.css/, use: ["to-string-loader", "css-loader"] },
      {
        test: /\.ts/,
        use: ["awesome-typescript-loader", "angular2-template-loader"]
      },
      {
        test: /\.(jpg|png|gif)/,
        use: "file-loader"
      }
    ]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "vendor"
        }
      }
    }
  },

  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
