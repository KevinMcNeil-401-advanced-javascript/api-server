'use strict';

const express = require('express');
const router = express.Router();
const cat = require('../lib/models/categories/categories.collection.js');


router.post('/categories', (req, res) => {res.send(req.body)});
router.get('/categories', (req, res) => {res.send(req.body)});
router.get('/categories/:id', (req, res) => {res.send(req.params)});
router.put('/categories/:id', (req, res) => {res.send(req.params)});
router.delete('/categories/:id', (req, res) => {res.send(req.params)});


module.exports = router;