#  My React Boilerplate
[![License: AGPL v3](https://img.shields.io/badge/license-GPL%20(%3E%3D%203)-blue.svg)](https://opensource.org/licenses/GPL-3.0)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)


## Eslint Config
We respect airbnb rules.

## Scripts
- `npm run start`: script to run project in develop mode. 
- `npm run lint`: script to run ESLint.
- `npm run build`: script to build project for production. 

## Boilerplate Packages
> webpack:
- `webpack` as module bundler.
- `webpack-cli` to use webpack in the command line.
- `webpack-dev-server` to have webpack watch changes and refresh webpage whenever any change is made to components.
- `html-webpack-plugin` this plugin generates an HTML file, injects the script inside the HTML file and writes this file to dist/index.html.
> babel:
- `babel-core` to transforms ES6 code to ES5.
- `babel-loader` as  webpack helper to transpile code, given the the preset.
- `babel-preset-env` to preset which helps babel to convert ES6, ES7 and ES8 code to ES5.
- `babel-preset-react` to preset which Transforms JSX to JavaScript.
- `babel-eslint` to lint ALL valid Babel code with ESLint. 
- `babel-jest` dependency of jest
> loaders:
- `css-loader` is used to load and bundle all of the CSS files into one file. 
- `style-loader` will add all of the styles inside the style tag of the document.
- `html-loader` to exports HTML as string. HTML is minimized when the compiler demands.
- `eslint-loader` eslint loader for webpack.
> eslint:
- `eslint-config-airbnb`: It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, and `eslint-plugin-jsx-a11y`.
> jest: 
- `jest` for tests
- `react-test-renderer` for rendering snapshots testing


## Authors

- Marzzieh Moghtaderi - [Marzzy Mogh](https://github.com/marzzy)


## License

This project is licensed under the terms of the 
[AGPLv3 (GNU General Public License v3.0)](./LICENSE.md) license.