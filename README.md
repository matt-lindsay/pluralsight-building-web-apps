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
- 