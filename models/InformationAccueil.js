const mongoose = require('mongoose');

const InformationAccueilSchema = new mongoose.Schema({
  
  description: {
    type: String,
    required: true
  },
  titreactualités: {
    type: String,
    required: true,
   
  },
  actualités: {
    type: String,
    required: true
  },
  
});

module.exports = mongoose.model('informationacceuil', InformationAccueilSchema);
