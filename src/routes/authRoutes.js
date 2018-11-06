const express = require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:authRoutes');

const authRouter = express.Router();

function router() {
  authRouter.route('/signUp')
    .post((req, res) => {
      debug(req.body); // demonstrates the POST body when the signup form is used.
      res.json(req.body); //
    });
  return authRouter;
}
module.exports = router;
