const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const deps = require("./package.json").dependencies;

// load env file while running pipelines
// const mfeURL = require("dotenv").config({ path: "./.env" }).parsed.MFE_URL;
// const isProd =
//   require("dotenv").config({ path: "./.env" }).parsed.ENV === "production";

module.exports = (env, wpArgs) => {
  const isLocal = wpArgs.mode === "development";

  return {
    resolve: {
      extensions: [".js", ".jsx", ".json", ".scss"],
    },
    devServer: {
      host: "admin.app.local.iprs.saip.gov.sa",
      port: 4000,
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      allowedHosts: "all",
      liveReload: true,
      watchFiles: [path.resolve(__dirname, "src", "index.js")],
    },
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
      filename: "bundle.js",
      path: path.join(__dirname, "/build"),

      publicPath: "/",
      uniqueName: "appContainer",

      assetModuleFilename: "[name][ext]",
    },
    stats: "errors-only",

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, // import .js and .jsx files
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.module\.(css|(s(a|c)ss))$/,
          use: [
            isLocal ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: true,
                sourceMap: isLocal,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: isLocal,
              },
            },
          ],
        },
        {
          test: /\.(css|(s(a|c)ss))$/,
          exclude: /\.module.(css|(s(a|c)ss))$/,
          use: [
            isLocal ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: isLocal,
              },
            },
          ],
        },
        {
          test: /\.(js|jsx)$/,
          enforce: "pre",
          use: ["source-map-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset/resource",
        },
      ],
    },

    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
      }),
      new Dotenv({ path: isLocal ? "./.env.local" : "./.env" }),
      new ModuleFederationPlugin({
        name: "appContainer",
        filename: "appContainer.js",
        exposes: {},
        remotes: {},
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps["react"],
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
          "automation-unified-frontend": {
            singleton: true,
          },
        },
      }),
      new MiniCssExtractPlugin({
        filename: isLocal ? "[name].css" : "[name].[hash].css",
        chunkFilename: isLocal ? "[id].css" : "[id].[hash].css",
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: "public/assets", to: "public" },
          { from: "public/manifest.json", to: "manifest.json" },
          { from: "public/robots.txt", to: "robots.txt" },
        ],
      }),
    ],
  };
};
