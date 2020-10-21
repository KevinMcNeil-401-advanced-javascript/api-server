'use strict';

let timestamp = require('./timestamp.js');

function loggingMiddleware(req, res, next) {
  console.log(`The ${req.path} route was hit, using the ${req.method} method at ${req.requestTime}`);
  next();
};

module.exports = loggingMiddleware;