### NPM Packages:
    - Babel transpiles our code to work with all the different browsers.
    - Webpack transpiles and bundles all of our javascript into a single file with no spaces hence, optimizing our code.
    - Material UI comes with pre written components so we don't have to style our webpage.
    - babel/plugin-proposal-class-properties so we can use Async and Await in JavaScript.
    - react-router-dom allows us to re-route pages
    - material-ui/icons allows us to use icons from the material ui.

```json
"devDependencies": {
    "@babel/preset-env": "^7.12.11",
    "@babel/preset-react": "^7.12.10",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "webpack": "^5.11.1",
    "webpack-cli": "^4.3.1"
  },
  "dependencies": {
    "@babel/core": "^7.12.10",
    "@babel/plugin-proposal-class-properties": "^7.12.1",
    "@material-ui/core": "^4.11.2",
    "@material-ui/icons": "^4.11.2",
    "babel-loader": "^8.2.2",
    "react-router-dom": "^5.2.0"
  }
```
### Node Scripts:
    - "dev" : Runs the webpack in the develoment and watch mode (automaticaly rebundles everytime we make a change and save)
    - "buil" : Builds the webpack in production mode.
```json
 "scripts": {
    "dev": "webpack --mode development --watch",
    "build": "webpack --mode production "
  },
```

</br>

### Babel Config (sets up the babel loader):

```json
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "node": "10"
                }
            }
        ],
        "@babel/preset-react"
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties"
    ]
}
```

</br>

### Webpack Config (Bundles all of JavaScript into one single file):

```javascript
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./static/frontend"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    optimization: {
        minimize: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                NODE_ENV: JSON.stringify("production"),
            },
        }),
    ],
}
```