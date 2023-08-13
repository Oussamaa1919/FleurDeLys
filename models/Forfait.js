const mongoose = require('mongoose');

const ForfaitSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
  
  },
  photo: {
    type: String,
    required: true,
  }
  
  
});

module.exports = mongoose.model('forfait', ForfaitSchema);
