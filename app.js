const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const bookRouter = express.Router();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const books = [
  {
    title: 'War and Peace',
    genre: 'Historical Fiction',
    author: 'Lev Nikolayevich Tolstoy',
    read: false
  },
  {
    title: 'Les Miserables',
    genre: 'Historical Fiction',
    author: 'Victor Hugo',
    read: false
  }];

bookRouter.route('/')
  .get((req, res) => {
    res.render('books',
      {
        nav: [
          { link: '/books', title: 'Books' },
          { link: '/authors', title: 'Authors' }
        ],
        title: 'Library',
        books
      });
  });

bookRouter.route('/single')
  .get((req, res) => {
    res.send('Hello single book');
  });

app.use('/books', bookRouter);

app.get('/', (req, res) => {
  res.render(
    'index',
    {
      nav: [
        { link: '/books', title: 'Books' },
        { link: '/authors', title: 'Authors' }
      ],
      title: 'Library'
    }
  );
});

app.listen(port, () => {
  debug(`Listening at port ${chalk.green(port)}`);
});
