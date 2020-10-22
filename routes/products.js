'use strict';

const express = require('express');
const router = express.Router();
const prod = require('../lib/models/categories/products.collection.js');
app.use(express.json(), express.urlencoded({extended: true}), timestamp, logger);

router.post('/products', (req, res) => {res.send(req.body)});
router.get('/products', (req, res) => {res.send(req.body)});
router.get('/products/:id', (req, res) => {res.send(req.params)});
router.put('/products/:id', (req, res) => {res.send(req.params)});
router.delete('/products/:id', (req, res) => {res.send(req.params)});