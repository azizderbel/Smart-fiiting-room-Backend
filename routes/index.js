var express = require('express');
var router = express.Router();
var article = require('../models/article')
var scannedarticle = require('../models/scannedarticle')

var app = require('../app');
const { all } = require('../app');


//-------------------------
router.get('/article',function(req, res, nex){
  article.find({} , function (err, docs) {
    res.send(docs)
  });
})
router.get('/scannedarticle',function(req, res, nex){
  scannedarticle.find({} , function (err, scannedarticles) {
    res.send(scannedarticles) 
  });
})
//-------------------------



router.get('/',function(req, res, nex){
  article.find({} , function (err, articles) {
    res.render("index.twig",{articles})
});
});


router.get('/find',function(req, res, nex){
  article.find({},{scanne : true} , function (err, articles) {
    res.render("index.twig",{articles})
  });
})

router.get('/find2',function(req, res, nex){

  article.findOne({})
  .populate('ScannedArticle')
  .exec(function (err, articles) {
    console.log(articles.ref)
    console.log(articles.scanne) 
    //console.log(articles.ScannedArticle._id)
    //res.render("index.twig",{articles})
  });
})


module.exports = router;
