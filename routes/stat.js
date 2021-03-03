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
    res.render("table.twig",{articles})
});
});



/*router.get('/today', async function(req, res, next) {

    let ids=[];
     let today= [];
     let array=[];
     for await (const doc of scannedarticle.find({date:new Date().toLocaleDateString()}).select('_id time')){ids.push(doc);}
     //scannedarticle.find({date:new Date().toLocaleDateString()},function(err, scannedarticles){

     
     
     for(let i=0;i<ids.length;i++) 
     {
        article.find({})
           console.log(articles.scanne.length)
           if (scanne.includes(ids[i]._id))
                     {today.push(doc); }
                    
                    } 
                
           
     
     for (let item of today) {array.push(item);    console.log(item.length);     }
     
    console.log(array.length);
    console.log(ids.length); 
    //res.render('table.twig', { docs: array });
  });

*/
/*
router.get('/week', async function(req, res, nex){
    
    /*var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    var n = weekday[d.getDay()];
//console.log(n)
var d = new Date("12/12/2020");
//console.log(d)
var day = d.getDay();
// Sunday - Saturday : 0 - 6
//console.log(day);

var today = new Date();
var dd = String(today.getDate()).padStart(1);
var mm = String(today.getMonth() + 1).padStart(1); //January is 0!
var yyyy = today.getFullYear();
today =  mm + '/' +dd + '/' +yyyy ;
console.log(today);


let ids= [];  
//let today= new Set();  
let array=[];
//let aux= {"Sun": 0,"Mon":0,"Tue":0,"Wed":0,"Thu":0,"Fri":0,"Sat":0};
let aux= {"0": 0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0};



scannedarticle.find({date : today} , function (err, scannedarticles) {
    console.log(scannedarticles)
    today = new Date();
    var d = today.getDate();
    console.log(d)
        //res.render("table.twig",{scannedarticles})

  });

for await (const doc of scannedarticle.find({date: d.day}).select('_id time')){ids.push(doc);}

for(let i=0;i<ids.length;i++) 
{
   for await (const doc of article.find({}).select('scanne')){ 
       if (doc.scanne.includes(ids[i]._id))
                {today.add(doc);}
                                         }
}

for (let item of today) {array.push(item);}
console.log(array);
 
});

*/



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
