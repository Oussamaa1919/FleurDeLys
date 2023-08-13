const mongoose = require('mongoose');

const ActualitesSchema = new mongoose.Schema({
  
  
  titre: {
    type: String,
    required: true,
   
  },
  text: {
    type: String,
    required: true
  },
  
});

module.exports = mongoose.model('actualites', ActualitesSchema);
