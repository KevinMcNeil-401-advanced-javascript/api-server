'use strict'

// const express = require('express');
// const app = express();
// const timestamp = require('./middleware/timestamp.js')
// const logger = require('./middleware/logger.js')
// const err404 = require('./middleware/404.js')
// const err500 = require('./middleware/500.js')

// app.use(express.json(), express.urlencoded({extended: true}), timestamp, logger);


// module.exports = app;


// Bring in the express framework
const express = require('express');

const app = express();

const userRouter = require('../routes/users.js');
// const productsRouter = require('../routes/products.js'); 

app.use(express.json());

app.use('/user', userRouter);
app.use((err, req, res, next) => {
  console.log(err);
  res.status(400).send('Try again');
});
// app.use('/products', )

module.exports = app;