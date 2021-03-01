var express = require('express');
var router = express.Router();
var article = require('../models/article')
var scannedarticle = require('../models/scannedarticle')

var app = require('../app')



//-------------------------
router.get('/article',function(req, res, nex){
  article.find({} , function (err, docs) {
    res.send(docs)
  });
})
router.get('/scannedarticle',function(req, res, nex){
  scannedarticle.find({} , function (err, docs) {
    res.send(docs)
  });
})
//-------------------------



router.get('/',function(req, res, nex){
  article.find({} , function (err, articles) {
    res.render("index.twig",{articles})
  });

})

module.exports = router;
