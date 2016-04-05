var Festival = require('../models/Festival.js');
//var festivalData = require('../../data/festivalData.js');

exports.retrieveFestival = function(req, res) {
  var query = {_id: req.params.id};
  Festival.find(query, function(err, matchingFestival) {
    if (err) {
      return res.json(err);
    }
    res.json(matchingFestival);
  })
}

exports.seedData = function(req, res) {
  Festival.create(festivalData, function(err, newFestival) {
    if (err) {
      return res.json(err);
    }
    res.json(newFestival);
  })
}