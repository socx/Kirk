# Kirk
=================================
This is a church management system


**Steps taken:**

1. Initialised yarn `yarn init` and enter desired answers to questions. This created node_modules, package.json and yarn.lock
2. Installed webpack using `yarn add --save-dev webpack webpack-dev-server`.
3. Created webpack.config.js and added the following:-
    ```
    module.exports = {
        context: __dirname + "/src",

        entry: "./main/index.js",

        output: {
            filename: "kirk.js",
            path: __dirname + "/dist",
        }
    };
    ```
4. Created the entry path specified above, i.e. src/main/index.js and added sample javascript ```console.log('What hath God wroth?')``` to index.js
5. Installed webpack globally using `npm i --global webpack`. (yarn add did not work here so I used npm i)
6. Ran webpack using `webpack`.
7. Added Babel to transpile `yarn add --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react` .
8. Created `.babelrc` in the project root folder and add presets.
9. Added js/jsx loader to your webpack config, as well as extensions we want to resolve thus:-

```
resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  }

```
10. React setup
    - Installed React using `yarn add react react-dom --save`
    - Created index.html with a single div having id `main-container` and referenced the script `main/index.js` in it.
    - Installed file-loader `yarn add file-loader --save-dev`
    - Updated webpack config to add entry thus:-
        ```
        entry: {
            javascript: "./js/app.js",
            html: "./index.html",
        }

        ```
        and add loader
        ```
        {
            test: /\.html$/,
            loader: "file?name=[name].[ext]",
        }
        ```
11. Dev server and hot reload
    - Installed webpack development server using 
        `yarn add --save-dev webpack webpack-dev-server`
    - Installed webpack development server globally to allow running it by simply using `webpack-dev-server` 
        `yarn add --global webpack-dev-server`