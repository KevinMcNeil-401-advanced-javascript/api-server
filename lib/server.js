'use strict'

const express = require('express');
const app = express();
app.use(express.json());

const productRouter = require('../routes/products.js');
const catRouter = require('../routes/categories.js');

app.use('/product', productRouter);
app.use('/category', catRouter)
app.use((err, req, res, next) => {
  console.log(err);
  res.status(400).send('Try again');
});

module.exports = app;