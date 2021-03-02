
## Music Room
Tired of arguing over music in a party or a gathering? 

Here, make a _```virtual room```_ add people with the unique _```RoomID```_ and let the members of the room control the music through a _```voting system```_.

But Rose or whatever your name is, how does it work?

It works like _Magic_

Ok no, actually it uses the _```Spotify's Public API```_  So, log in and start partying, forget about all the work you have to get done and enjoy!
</br></br></br>

_Note: This is still under development and I [@rosekamallove](https://github.com/rosekamallove/) is the only developer, so the experience may not be the smoothest and new features maybe added_

</br>

<hr>

- ### Dependencies:
    - Python:

            sudo apt install python3-pip python3-django nodejs npm
            pip3 install django djangorestframeworks pylint-django

    - NPM:

            cd ./frontend ; npm i



</br>

- ### To run the development server: 

    - Whenever you make a change to the database run the following command :

            pyhton3 ./manage.py makemigrations
            pyhton3 ./manage.py migrate

    - To run the server type command
    
            pyhton3 ./manage.py runserver

</br>
<hr>

- ### NPM Packages

    - _```babel```_ transpiles our code to work with all the different browsers.
    - _```webpack```_ transpiles and bundles all of our javascript into a single file with no spaces hence, optimizing our code.
    - _```material-ui```_ comes with pre written components so we don't have to style our webpage.
    - _```babel/plugin-proposal-class-properties```_ so we can use Async and Await in JavaScript.
    - _```react-router-dom```_ allows us to re-route pages
    - _```material-ui/icons```_ allows us to use icons from the material ui.

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
- ### Node Scripts:

    - _```"dev"```_ : Runs the webpack in the develoment and watch mode (automaticaly rebundles everytime we make a change and save)
    - _```"build"```_ : Builds the webpack in production mode.
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
`
