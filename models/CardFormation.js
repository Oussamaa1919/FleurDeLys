const mongoose = require('mongoose');

const CardFormationSchema = new mongoose.Schema({
  text: {
    type: String,
  
  },
  photo: {
    type: String,
    required: true,
  }
  
  
});

module.exports = mongoose.model('cardformation', CardFormationSchema);
