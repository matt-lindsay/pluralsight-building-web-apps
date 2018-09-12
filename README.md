# pluralsight-building-web-apps
Updated Pluralsight course, Building Web Apps with Nodejs and Express.

## node version 8.11.3

### Getting Started

- `$HOME/.npmrc` file used to save exact versions of npm packages.

### First Page

- Chalk sets colour on console messages. Use ` (back tick) for template strings, which are an ES6 feature that allow you to insert variables in to a string.

- debug for monitoring app in console e.g. `/>DEBUG=* node app.js`

- morgan for monitoring whilst app is running. Options include `'combined'` which give a more detailed output and `'tiny'` which is more succinct.

#### CDN

- Great to get up and running fast. Not great if you need to work offline. For jQuery, Bootstrap and Font-Awesome I think this is a good option.

#### Public Directory

- Manually copying CSS and JS files to public directory is painful.

#### Serving Static Files - Node Modules

- Use `express.static()` to serve files from node_modules to `public/css ...js`.

### Setting Up Tooling

#### Intro

- NPM start
- ESLint
- ES6 and beyond
- Nodemon
- Environmental variables

#### NPM Scripts and ESLint

- Set NPM Start script to run `DEBUG=...` (later on nodemon is used with ESLint).
- ESLint is the defacto standard for linting JavaScript.
- Install globally to use from the command line (not recommended, will exaplin later).
- `/>eslint --init` to adopt a style guide.
- Use a popular style guide -> [AirBnB](https://github.com/airbnb/javascript "Air BnB Style Guide")

#### Running ESLint

- `/> ./node_modules/.bin/eslint app.js` - this is using the locally installed package. Globally installing development dependencies is not a good idea in a production environment.

#### Global vs Local Installations

- Global packages don't work in production - use an npm script to run eslint from the locally installed version of eslint, using package.json for example `"lint": "eslint app.js"`

#### ES6

- The website [Node Green](https://node.green) lists versions of nodejs and ES features available in them.
- Check out Jonathan's ES6 course on Pluralsight [ES6 course](https://app.pluralsight.com/library/courses/nodejs-es6-web-apps/table-of-contents) to learn more.
- Get ESLINT plugin for VS Code, by Dirk Baeumer.

#### Refactoring in VS Code

- Double click text to change an object name, `CMD + Fn + F2` to set multi-cursor, then write the object's new name.
- `/>./node_modules/.bin/eslint app.js --fix` eslint can fix problems for you automaticaly, if you are confortable using it.

#### Setting up Nodemon

- nodemon reloads app automatically when you make code changes. Its a great development tool.
- Change start script from `"start": "DEBUG=app node app.js"` to `"start": "DEBUG=app nodemon app.js"` which will make use of nodemon.
- nodemon config is added to package.json and includes environment variables e.g.
```
"nodemonConfig": {
    "restartable": "rs",
    "ignore": [
      "node_modules/**/node_modules"
    ],
    "delay": "2500",
    "env": {
      "NODE_ENV": "development",
      "PORT": 4000
    }
  }
  ```

###Templating Engines

### Pug and JavaScript

- Pug used to called Jade. Very clean and unpoinoinated.
- EJS is more like HTML and follows same principles as Angular andRact.

## Routing

### Navigation

- 