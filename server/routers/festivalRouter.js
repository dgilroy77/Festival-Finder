var express = require('express');
var festivalRouter = require('express').Router();
var festivalController = require('../controllers/festivalController.js');

festivalRouter.route('/:id') 
  .get(festivalController.retrieveFestival)

festivalRouter.route('/test')
  .post(festivalController.seedData)


module.exports = festivalRouter;