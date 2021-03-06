const mongoose = require('mongoose')
// Article Schema
let articleSchema = new mongoose.Schema({
    "ref":String,
    "desc":String,
    "infos":String,
    "taille":String,
    "couleur":String,
    "quantite":Number,
    "categorie":String,
    "image":String,
    "scanne":[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ScannedArticle"
    }]
    },
    {collection: "Stock"}
    );

var Model = module.exports = mongoose.model('Model',articleSchema);

