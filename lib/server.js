'use strict'

const express = require('express');
const app = express();
const timestamp = require('./middleware/timestamp.js')
const logger = require('./middleware/logger.js')
const err404 = require('./middleware/404.js')
const err500 = require('./middleware/500.js')

app.use(express.json(), express.urlencoded({extended: true}), timestamp, logger);


//routes

//products
app.post('/products', (req, res) => {res.send(req.body)});
app.get('/products', (req, res) => {res.send(req.body)});
app.get('/products/:id', (req, res) => {res.send(req.params)});
app.put('/products/:id', (req, res) => {res.send(req.params)});
app.delete('/products/:id', (req, res) => {res.send(req.params)});

//categories
app.post('/categories', (req, res) => {res.send(req.body)});
app.get('/categories', (req, res) => {res.send(req.body)});
app.get('/categories/:id', (req, res) => {res.send(req.params)});
app.put('/categories/:id', (req, res) => {res.send(req.params)});
app.delete('/categories/:id', (req, res) => {res.send(req.params)});


module.exports = app;