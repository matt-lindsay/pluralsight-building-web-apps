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

- VS Code set indentation to tabs with two spaces.

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

### Templating Engines

#### Pug and JavaScript

- Pug used to called Jade. Very clean and unpoinoinated.
- EJS is more like HTML and follows same principles as Angular andRact.
  - EJS syntax: `<%=title%>` prints a variable that has been passed in.
  - `<% for(...) {%>` runs some JavaScript.
  - More info on EJS [syntax](http://www.ejs.co/#docs) can be found here.

### Routing

#### Navigation

- Added the following to `.eslintrc.js` to remove red squigglies on config JSON in JavaScript files.
  - 0 is ignore, 1 is warning (green), 2 is error (red).

```
"rules": {
        "comma-dangle": 0
    }
```

- Make sure to copy a downloaded theme's CSS and JavaScript files into the app's public directory. I wasted a lot of time here with menus not displaying.

#### Routing

- Single book route - on sub route of single book, use `const id = req.params.id;` to identify the id of the book selected from the top level view of `books`. Changing to object destructuring syntax (ES6) e.g. `const { id } = req.params;` does the same thing.
- Remember to add a `/` front end dependecies if they are sub pages so that it finds CSS and JS files.

### Databases

#### Creating a database

- MS SQL Server created on Azure for this example (I am not completing this example as I do it already through work). If I was carrying this example out I would use the MS SQL Server Docker container to run it locally, negating the requirement to create an Azure account restricted to 30 days.

#### Connecting to a database

- `mssql` npm package used to connect to SQL Server.
- Modify `package.json` to include `:*` in start script e.g. `DEBUG=app:* nodemon app.js`

#### Async

- Async negates the requirement to use Promises. I haven't fully implemented the SQL Server example, but Async is used in bookRoutes.js
- ((){}()) format of the `async` signature, or 'Iffy'.

#### Middleware

- Morgan is an example of middleware. Passport is also middleware.
- Middleware is a function executed on everything coming into the app.
- The `Next()` keyword is used to move onto the next middleware.
- Also looked at array destructuring on `bookRoutes.js` and inserted middleware into the router.

#### MongoDB

- Unstructured non relational database.
- MongoDB can be installed anywhere.
- [Download MongoDB Community Server](https://www.mongodb.com/download-center?initial=true#community)
- Check the install instructions [here](https://docs.mongodb.com/manual/administration/install-on-linux/)
- To start mongod on linux `sudo service mongod start`
- `sudo service mongod stop`
- `sudo service mongod restart`
- You can visit mongo at `localhost:27017` in the web browser.
- `mongo --host 127.0.0.1:27017`
  - `>show dbs` shows databases in the mongo instance.
  - `>use libraryApp`
  - `>db.books.find().pretty()` can leave out the 'pretty()' but the response looks gross.
- Verify that the mongod process has started successfully by checking the contents of the log file at /var/log/mongodb/mongod.log for a line reading `[initandlisten] waiting for connections on port 27017`
- [Getting started guide](https://docs.mongodb.com/manual/tutorial/getting-started/#getting-started)

#### MongoDB Admin Routes

- Setup an async insert function in `adminRoutes.js`. This seeds the mongo database with data. Every time you revisit this route, it inserts more data.

#### MongoDB Testing Insert

- Created and seeded the mongo database.

#### MongoDB Select Many

- Implemented the find method saving the data to an array, and rendering it on the bookListView.

#### MongoDB Select One

- Using findOne() method from mongo: parse in a JSON object...
- Also require ObjectId from you mongod 'require' statement...
- e.g. `const book = await col.findOne({ _id: new ObjectID(id) });`

#### Summary

- Looked at SQL Server.
- Looked at mongoDB.
- Next adding users.

### Authentication

#### Introduction

- Going to create users.
- Authentication - logging in.
- Authorization - access control.
- Passport, going to use local strategy, but there are others available for third party identity providers.

#### Sign Up

- On `index.ejs` signupForm you would usually have type of entry field equal to password e.g. `Password: <input type="password" name="password" id="password"/><br/>` This hasn't been implmented here so you can see what is going on.
 
 #### Auth Routes

 - Making use of body-parser.
 - Add to `app.js` with body-parser towards the top.
 - Make sure to declare `.json` and `urlencoded` options.
 - This pulls out a post and adds it to a response body.
 - body-parser being used as middleware, which calls `next`.
 - `debug(req.body);` demonstrates the POST body when the signup form is used in the terminal.
 - `res.json(req.body);` shows the properly formatted JSON in the browser.

#### Passport

- Three packages added: `passport`, `cookie-parser` and `express-session`.
- Passport uses strategies can be search in npmjs.com to use other identity providers e.g. Google and Facebook.

#### Local Strategy

- Passport adds things to the request e.g. `login`
- Added a strategy.
- Added some routes.

#### Creating a User

- We have now created a user, check `authRoutes.js` for details.

#### Sign In

- Added signin form.

#### Validating User

- Populated `local.strategy` so that the logged in user is redirected to `/profile`

#### Authorizing User

- Protect routes to those that are allowed to visit them.
- Can use `req.user.admin` and `req.user.roles` as well as `req.user` to protect routes further.
- Added a `Sign Out` button.

#### Summary

- Passport, create users, authentication, authorization.

### Structure and third party APIs

#### Introduction

- Structure, controllers, services and 3rd party APIs (Good Reads).

#### Controllers

- 