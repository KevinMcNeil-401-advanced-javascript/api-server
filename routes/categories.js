'use strict';

const express = require('express');
const router = express.Router();
const cat = require('../lib/models/categories/categories.collection.js');
//app.use(express.json(), express.urlencoded({extended: true}), timestamp, logger);

router.post('/categories', (req, res) => {res.send(req.body)});
router.get('/categories', (req, res) => {res.send(req.body)});
router.get('/categories/:id', (req, res) => {res.send(req.params)});
router.put('/categories/:id', (req, res) => {res.send(req.params)});
router.delete('/categories/:id', (req, res) => {res.send(req.params)});

// funciton getAll () {
// cat.read()
// .then(list => console.log(list))
// .catch(error => next())
// }

module.exports = router;