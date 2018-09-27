const express = require('express');

const bookRouter = express.Router();

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

bookRouter.route('/single')
  .get((req, res) => {
    res.send('Hello single book');
  });

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

module.exports = bookRouter;
