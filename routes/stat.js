var express = require('express');
var router = express.Router();
var article = require('../models/article');






router.get('/',function(req, res, nex){
  article.find({} , function (err, articles) {
    res.render("table.twig",{articles:articles})
                                   });
});











module.exports = router;
