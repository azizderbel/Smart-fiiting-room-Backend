var express = require('express');
var router = express.Router();
const Model = require('../models/article');
const ScannedArticle = require('../models/scannedarticle.js');




router.get('/', async function(req, res, next) {

  let ids=[];
   let today= new Set();
   let array=[];
   for await (const doc of ScannedArticle.find({date:new Date().toLocaleDateString()}).select('_id time')){ids.push(doc);}
   
   for(let i=0;i<ids.length;i++) 
   {
      for await (const doc of Model.find({}).select('scanne categorie desc couleur image -_id ')){ 
          if (doc.scanne.includes(ids[i]._id))
                   {today.add(doc);}
                                            }
   }
   
   for (let item of today) {array.push(item);}
   
  console.log(array);
  res.render('sta.twig', { docs: array });
});

router.get('/cat', async function(req, res, next) {
  let cpt= 0;
  let aux= {"casual": 0,"sporty":0,"grunge":0,"vacation":0,"bohemian":0,"chicAndclassic":0};
 for await (const doc of Model.find({categorie:"casual"})){cpt=cpt+doc.scanne.length;}
  aux.casual=cpt;cpt=0;
 for await (const doc of Model.find({categorie:"sporty"})){cpt=cpt+doc.scanne.length;}
  aux.sporty=cpt;cpt=0;
 for await (const doc of Model.find({categorie:"grunge"})){cpt=cpt+doc.scanne.length;}
  aux.grunge=cpt;cpt=0;
 for await (const doc of Model.find({categorie:"vacation"})){cpt=cpt+doc.scanne.length;}
  aux.vacation=cpt;cpt=0;
 for await (const doc of Model.find({categorie:"bohemian"})){cpt=cpt+doc.scanne.length;}
  aux.bohemian=cpt;cpt=0;
 for await (const doc of Model.find({categorie:"chicAndclassic"})){cpt=cpt+doc.scanne.length;}
  aux.chicAndclassic=cpt;cpt=0;
  
  //console.log(aux);
  //res.render('sta.twig');
  res.send(aux);    
});










module.exports = router;
