const path = require('path')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

const node_modules = path.join(__dirname, 'node_modules');

module.exports = {
  staticDirs: [{ from: '../assets', to: '/assets' }],
  babel: async (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      [
        "@emotion",
        {
          "sourceMap": true,
          "autoLabel": "dev-only",
          "labelFormat": "[local]",
          "cssPropOptimization": true
        }
      ],
      ["@babel/plugin-proposal-numeric-separator"],
    ]
  }),
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/scenes/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/utils/src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  features: {
    previewMdx2: true, // 👈 MDX 2 enabled here
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.plugins.push(new NodePolyfillPlugin());
    
    config.resolve.alias = {
      ...config.resolve.alias,
      "@psycholog-studio/ui": path.resolve(__dirname, "../packages/ui/src"),
      "@psycholog-studio/scenes": path.resolve(__dirname, "../packages/scenes/src"),
      "@psycholog-studio/utils": path.resolve(__dirname, "../packages/utils/src"),
      "@psycholog-studio/base": path.resolve(__dirname, "../libs/base"),
    };

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [
                path.resolve(__dirname, './node_modules')
              ]
            }
          }
        }
      ],
    });

    return config;
  },
}