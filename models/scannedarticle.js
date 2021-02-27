const mongoose = require('mongoose');
let scannedarticleSchema = new mongoose.Schema({
    "date":String,
    "time":String,
    "article": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Model"
      }
    },
    {collection: "Scanned"}
    );
var ScannedArticle = module.exports = mongoose.model('ScannedArticle',scannedarticleSchema);
