# pluralsight-building-web-apps
Updated Pluralsight course, Building Web Apps with Nodejs and Express.

## node version 8.11.3

### Getting Started

- $HOME/.npmrc set up to save exact versions of npm packages.

### First Page

- Chalk sets colour on console messages.
` = template strings ES6 feature.

- debug for monitoring app in console e.g. />DEBUG=* node app.js

- morgan for monitoring whilst app is running. Options include 'combined' and 'tiny'.

#### CDN

- Great to get up and running fast. Not great if you need to work offline.

#### Public Directory

- Manually copying CSS and JS files to public directory is painful.

#### Serving Static Files - Node Modules

- Use express.static() to serve files from node_modules to public/css ...js.

### Setting Up Tooling

### Intro

- NPM start
- ESLint
- ES6 and beyond
- Nodemon
- Environmental variables

### NPM Scripts and ESLint

- Set NPM Start script to run DEBUG=...
- ESLint defacto standard for linting JavaScript
- Install globally to use from the command line.
- />eslint --init
- Use a popular style guide -> AirBnB (review https://github.com/airbnb/javascript)

### Running ESLint

- /> ./node_modules/.bin/eslint app.js

### Global vs Local Installations

- Global packages don't work in production - use an npm script to run eslint from the locally installed version of eslint, using package.json.

### ES6

- node.green versions of nodejs and ES features available in them.
- Check out Jonathan's ES6 course on Pluralsight https://app.pluralsight.com/library/courses/nodejs-es6-web-apps/table-of-contents
- Get ESLINT plugin for VS Code.

### Refactoring in VS Code

- Double click text to change, CMD + Fn + F2 to set multi-cursor, then write new name.
- />./node_modules/.bin/eslint app.js --fix eslint can fix problems for you automaticaly.

### Setting up Nodemon

- nodemon reloads app automatically when you make code changes.
- Change start script from "start": "DEBUG=app node app.js" to "start": "DEBUG=app nodemon app.js".
- nodemon config placed in package.json.

## Emplating Engines

### 